import { Container } from 'typedi';
import { IsNull } from '@n8n/typeorm';
import validator from 'validator';

import type { User } from '@/databases/entities/User';
import { UserRepository } from '@db/repositories/user.repository';
import { ProjectRepository } from '@db/repositories/project.repository';

import { SUCCESS_RESPONSE_BODY } from './shared/constants';
import { randomApiKey, randomEmail, randomName, randomValidPassword } from './shared/random';
import * as testDb from './shared/testDb';
import * as utils from './shared/utils/';
import { addApiKey, createOwner, createUser, createUserShell } from './shared/db/users';
import type { SuperAgentTest } from './shared/types';
import { mockInstance } from '@test/mocking';
import { GlobalConfig } from '@n8n/config';
import type { IPersonalizationSurveyAnswersV4 } from 'n8n-workflow';

const testServer = utils.setupTestServer({ endpointGroups: ['me'] });

beforeEach(async () => {
	await testDb.truncate(['User']);
	mockInstance(GlobalConfig, { publicApi: { disabled: false } });
});

describe('When public API is disabled', () => {
	let owner: User;
	let authAgent: SuperAgentTest;

	beforeEach(async () => {
		owner = await createOwner();
		await addApiKey(owner);
		authAgent = testServer.authAgentFor(owner);
		mockInstance(GlobalConfig, { publicApi: { disabled: true } });
	});

	test('POST /me/api-key should 404', async () => {
		await authAgent.post('/me/api-key').expect(404);
	});

	test('GET /me/api-key should 404', async () => {
		await authAgent.get('/me/api-key').expect(404);
	});

	test('DELETE /me/api-key should 404', async () => {
		await authAgent.delete('/me/api-key').expect(404);
	});
});

describe('Owner shell', () => {
	let ownerShell: User;
	let authOwnerShellAgent: SuperAgentTest;

	beforeEach(async () => {
		ownerShell = await createUserShell('global:owner');
		await addApiKey(ownerShell);
		authOwnerShellAgent = testServer.authAgentFor(ownerShell);
	});

	test('PATCH /me should succeed with valid inputs', async () => {
		for (const validPayload of VALID_PATCH_ME_PAYLOADS) {
			const response = await authOwnerShellAgent.patch('/me').send(validPayload);

			expect(response.statusCode).toBe(200);

			const {
				id,
				email,
				firstName,
				lastName,
				personalizationAnswers,
				role,
				password,
				isPending,
				apiKey,
			} = response.body.data;

			expect(validator.isUUID(id)).toBe(true);
			expect(email).toBe(validPayload.email.toLowerCase());
			expect(firstName).toBe(validPayload.firstName);
			expect(lastName).toBe(validPayload.lastName);
			expect(personalizationAnswers).toBeNull();
			expect(password).toBeUndefined();
			expect(isPending).toBe(false);
			expect(role).toBe('global:owner');
			expect(apiKey).toBeUndefined();

			const storedOwnerShell = await Container.get(UserRepository).findOneByOrFail({ id });

			expect(storedOwnerShell.email).toBe(validPayload.email.toLowerCase());
			expect(storedOwnerShell.firstName).toBe(validPayload.firstName);
			expect(storedOwnerShell.lastName).toBe(validPayload.lastName);

			const storedPersonalProject = await Container.get(
				ProjectRepository,
			).getPersonalProjectForUserOrFail(storedOwnerShell.id);

			expect(storedPersonalProject.name).toBe(storedOwnerShell.createPersonalProjectName());
		}
	});

	test('PATCH /me should fail with invalid inputs', async () => {
		for (const invalidPayload of INVALID_PATCH_ME_PAYLOADS) {
			const response = await authOwnerShellAgent.patch('/me').send(invalidPayload);
			expect(response.statusCode).toBe(400);

			const storedOwnerShell = await Container.get(UserRepository).findOneByOrFail({});
			expect(storedOwnerShell.email).toBeNull();
			expect(storedOwnerShell.firstName).toBeNull();
			expect(storedOwnerShell.lastName).toBeNull();

			const storedPersonalProject = await Container.get(
				ProjectRepository,
			).getPersonalProjectForUserOrFail(storedOwnerShell.id);

			expect(storedPersonalProject.name).toBe(storedOwnerShell.createPersonalProjectName());
		}
	});

	test('PATCH /me/password should fail for shell', async () => {
		const validPasswordPayload = {
			currentPassword: randomValidPassword(),
			newPassword: randomValidPassword(),
		};

		const validPayloads = [validPasswordPayload, ...INVALID_PASSWORD_PAYLOADS];

		for (const payload of validPayloads) {
			const response = await authOwnerShellAgent.patch('/me/password').send(payload);
			expect([400, 500].includes(response.statusCode)).toBe(true);

			const storedMember = await Container.get(UserRepository).findOneByOrFail({});

			if (payload.newPassword) {
				expect(storedMember.password).not.toBe(payload.newPassword);
			}

			if (payload.currentPassword) {
				expect(storedMember.password).not.toBe(payload.currentPassword);
			}
		}

		const storedOwnerShell = await Container.get(UserRepository).findOneByOrFail({});
		expect(storedOwnerShell.password).toBeNull();
	});

	test('POST /me/survey should succeed with valid inputs', async () => {
		const validPayloads = [SURVEY, EMPTY_SURVEY];

		for (const validPayload of validPayloads) {
			const response = await authOwnerShellAgent.post('/me/survey').send(validPayload);

			expect(response.body).toEqual(SUCCESS_RESPONSE_BODY);
			expect(response.statusCode).toBe(200);

			const storedShellOwner = await Container.get(UserRepository).findOneOrFail({
				where: { id: ownerShell.id },
			});

			expect(storedShellOwner.personalizationAnswers).toEqual(validPayload);
		}
	});

	test('POST /me/api-key should create an api key', async () => {
		const response = await authOwnerShellAgent.post('/me/api-key');

		expect(response.statusCode).toBe(200);
		expect(response.body.data.apiKey).toBeDefined();
		expect(response.body.data.apiKey).not.toBeNull();

		const storedShellOwner = await Container.get(UserRepository).findOneOrFail({
			where: { email: IsNull() },
		});

		expect(storedShellOwner.apiKey).toEqual(response.body.data.apiKey);
	});

	test('GET /me/api-key should fetch the api key redacted', async () => {
		const response = await authOwnerShellAgent.get('/me/api-key');

		expect(response.statusCode).toBe(200);
		expect(response.body.data.apiKey).not.toEqual(ownerShell.apiKey);
	});

	test('DELETE /me/api-key should delete the api key', async () => {
		const response = await authOwnerShellAgent.delete('/me/api-key');

		expect(response.statusCode).toBe(200);

		const storedShellOwner = await Container.get(UserRepository).findOneOrFail({
			where: { email: IsNull() },
		});

		expect(storedShellOwner.apiKey).toBeNull();
	});
});

describe('Member', () => {
	const memberPassword = randomValidPassword();
	let member: User;
	let authMemberAgent: SuperAgentTest;

	beforeEach(async () => {
		member = await createUser({
			password: memberPassword,
			role: 'global:member',
			apiKey: randomApiKey(),
		});
		authMemberAgent = testServer.authAgentFor(member);

		await utils.setInstanceOwnerSetUp(true);
	});

	test('PATCH /me should succeed with valid inputs', async () => {
		for (const validPayload of VALID_PATCH_ME_PAYLOADS) {
			const response = await authMemberAgent.patch('/me').send(validPayload).expect(200);

			const {
				id,
				email,
				firstName,
				lastName,
				personalizationAnswers,
				role,
				password,
				isPending,
				apiKey,
			} = response.body.data;

			expect(validator.isUUID(id)).toBe(true);
			expect(email).toBe(validPayload.email.toLowerCase());
			expect(firstName).toBe(validPayload.firstName);
			expect(lastName).toBe(validPayload.lastName);
			expect(personalizationAnswers).toBeNull();
			expect(password).toBeUndefined();
			expect(isPending).toBe(false);
			expect(role).toBe('global:member');
			expect(apiKey).toBeUndefined();

			const storedMember = await Container.get(UserRepository).findOneByOrFail({ id });

			expect(storedMember.email).toBe(validPayload.email.toLowerCase());
			expect(storedMember.firstName).toBe(validPayload.firstName);
			expect(storedMember.lastName).toBe(validPayload.lastName);

			const storedPersonalProject =
				await Container.get(ProjectRepository).getPersonalProjectForUserOrFail(id);

			expect(storedPersonalProject.name).toBe(storedMember.createPersonalProjectName());
		}
	});

	test('PATCH /me should fail with invalid inputs', async () => {
		for (const invalidPayload of INVALID_PATCH_ME_PAYLOADS) {
			const response = await authMemberAgent.patch('/me').send(invalidPayload);
			expect(response.statusCode).toBe(400);

			const storedMember = await Container.get(UserRepository).findOneByOrFail({});
			expect(storedMember.email).toBe(member.email);
			expect(storedMember.firstName).toBe(member.firstName);
			expect(storedMember.lastName).toBe(member.lastName);

			const storedPersonalProject = await Container.get(
				ProjectRepository,
			).getPersonalProjectForUserOrFail(storedMember.id);

			expect(storedPersonalProject.name).toBe(storedMember.createPersonalProjectName());
		}
	});

	test('PATCH /me/password should succeed with valid inputs', async () => {
		const validPayload = {
			currentPassword: memberPassword,
			newPassword: randomValidPassword(),
		};

		const response = await authMemberAgent.patch('/me/password').send(validPayload);
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual(SUCCESS_RESPONSE_BODY);

		const storedMember = await Container.get(UserRepository).findOneByOrFail({});
		expect(storedMember.password).not.toBe(member.password);
		expect(storedMember.password).not.toBe(validPayload.newPassword);
	});

	test('PATCH /me/password should fail with invalid inputs', async () => {
		for (const payload of INVALID_PASSWORD_PAYLOADS) {
			const response = await authMemberAgent.patch('/me/password').send(payload);
			expect([400, 500].includes(response.statusCode)).toBe(true);

			const storedMember = await Container.get(UserRepository).findOneByOrFail({});

			if (payload.newPassword) {
				expect(storedMember.password).not.toBe(payload.newPassword);
			}
			if (payload.currentPassword) {
				expect(storedMember.password).not.toBe(payload.currentPassword);
			}
		}
	});

	test('POST /me/survey should succeed with valid inputs', async () => {
		const validPayloads = [SURVEY, EMPTY_SURVEY];

		for (const validPayload of validPayloads) {
			const response = await authMemberAgent.post('/me/survey').send(validPayload);
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(SUCCESS_RESPONSE_BODY);

			const { personalizationAnswers: storedAnswers } = await Container.get(
				UserRepository,
			).findOneByOrFail({});

			expect(storedAnswers).toEqual(validPayload);
		}
	});

	test('POST /me/api-key should create an api key', async () => {
		const response = await testServer.authAgentFor(member).post('/me/api-key');

		expect(response.statusCode).toBe(200);
		expect(response.body.data.apiKey).toBeDefined();
		expect(response.body.data.apiKey).not.toBeNull();

		const storedMember = await Container.get(UserRepository).findOneByOrFail({ id: member.id });

		expect(storedMember.apiKey).toEqual(response.body.data.apiKey);
	});

	test('GET /me/api-key should fetch the api key redacted', async () => {
		const response = await testServer.authAgentFor(member).get('/me/api-key');

		expect(response.statusCode).toBe(200);
		expect(response.body.data.apiKey).not.toEqual(member.apiKey);
	});

	test('DELETE /me/api-key should delete the api key', async () => {
		const response = await testServer.authAgentFor(member).delete('/me/api-key');

		expect(response.statusCode).toBe(200);

		const storedMember = await Container.get(UserRepository).findOneByOrFail({ id: member.id });

		expect(storedMember.apiKey).toBeNull();
	});
});

describe('Owner', () => {
	test('PATCH /me should succeed with valid inputs', async () => {
		const owner = await createUser({ role: 'global:owner' });
		const authOwnerAgent = testServer.authAgentFor(owner);

		for (const validPayload of VALID_PATCH_ME_PAYLOADS) {
			const response = await authOwnerAgent.patch('/me').send(validPayload);

			expect(response.statusCode).toBe(200);

			const {
				id,
				email,
				firstName,
				lastName,
				personalizationAnswers,
				role,
				password,
				isPending,
				apiKey,
			} = response.body.data;

			expect(validator.isUUID(id)).toBe(true);
			expect(email).toBe(validPayload.email.toLowerCase());
			expect(firstName).toBe(validPayload.firstName);
			expect(lastName).toBe(validPayload.lastName);
			expect(personalizationAnswers).toBeNull();
			expect(password).toBeUndefined();
			expect(isPending).toBe(false);
			expect(role).toBe('global:owner');
			expect(apiKey).toBeUndefined();

			const storedOwner = await Container.get(UserRepository).findOneByOrFail({ id });

			expect(storedOwner.email).toBe(validPayload.email.toLowerCase());
			expect(storedOwner.firstName).toBe(validPayload.firstName);
			expect(storedOwner.lastName).toBe(validPayload.lastName);

			const storedPersonalProject = await Container.get(
				ProjectRepository,
			).getPersonalProjectForUserOrFail(storedOwner.id);

			expect(storedPersonalProject.name).toBe(storedOwner.createPersonalProjectName());
		}
	});
});

const SURVEY: IPersonalizationSurveyAnswersV4 = {
	version: 'v4',
	personalization_survey_submitted_at: '2024-08-21T13:05:51.709Z',
	personalization_survey_n8n_version: '1.0.0',
	automationGoalDevops: ['test'],
	automationGoalDevopsOther: 'test',
	companyIndustryExtended: ['test'],
	otherCompanyIndustryExtended: ['test'],
	companySize: 'test',
	companyType: 'test',
	automationGoalSm: ['test'],
	automationGoalSmOther: 'test',
	usageModes: ['test'],
	email: 'test@email.com',
	role: 'test',
	roleOther: 'test',
	reportedSource: 'test',
	reportedSourceOther: 'test',
};

const EMPTY_SURVEY: IPersonalizationSurveyAnswersV4 = {
	version: 'v4',
	personalization_survey_submitted_at: '2024-08-21T13:05:51.709Z',
	personalization_survey_n8n_version: '1.0.0',
};

const VALID_PATCH_ME_PAYLOADS = [
	{
		email: randomEmail(),
		firstName: randomName(),
		lastName: randomName(),
	},
	// {
	// 	email: randomEmail().toUpperCase(),
	// 	firstName: randomName(),
	// 	lastName: randomName(),
	// },
];

const INVALID_PATCH_ME_PAYLOADS = [
	{
		email: 'invalid',
		firstName: randomName(),
		lastName: randomName(),
	},
	{
		email: randomEmail(),
		firstName: '',
		lastName: randomName(),
	},
	{
		email: randomEmail(),
		firstName: randomName(),
		lastName: '',
	},
	{
		email: randomEmail(),
		firstName: 123,
		lastName: randomName(),
	},
	{
		firstName: randomName(),
		lastName: randomName(),
	},
	{
		firstName: randomName(),
	},
	{
		lastName: randomName(),
	},
	{
		email: randomEmail(),
		firstName: 'John <script',
		lastName: randomName(),
	},
	{
		email: randomEmail(),
		firstName: 'John <a',
		lastName: randomName(),
	},
];

const INVALID_PASSWORD_PAYLOADS = [
	{
		currentPassword: null,
		newPassword: randomValidPassword(),
	},
	{
		currentPassword: '',
		newPassword: randomValidPassword(),
	},
	{
		currentPassword: {},
		newPassword: randomValidPassword(),
	},
	{
		currentPassword: [],
		newPassword: randomValidPassword(),
	},
	{
		currentPassword: randomValidPassword(),
	},
	{
		newPassword: randomValidPassword(),
	},
	{
		currentPassword: randomValidPassword(),
		newPassword: null,
	},
	{
		currentPassword: randomValidPassword(),
		newPassword: '',
	},
	{
		currentPassword: randomValidPassword(),
		newPassword: {},
	},
	{
		currentPassword: randomValidPassword(),
		newPassword: [],
	},
];
