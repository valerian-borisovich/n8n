import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class GigaChatApi implements ICredentialType {
	name = 'GigaChatApi';
	displayName = 'GigaChat';
	documentationUrl = 'GigaChat';

  private apiUrl: string = "https://gigachat.devices.sberbank.ru/api/v1";
  private authUrl: string = "https://ngw.devices.sberbank.ru:9443/api/v2/oauth";

  private clientSecret: string;
  private clientID: string;
  private clientKey: string;
  
  private verify_ssl_certs: boolean = false;
  private profanity_check: boolean = false;
  private scopeForPersonal: string = "GIGACHAT_API_PERS";
  private scopeForCorporation: string = "GIGACHAT_API_CORP";
  // private isIgnoreTSL: boolean = true;
  // private isPersonal: boolean = true;
  // private autoRefreshToken: boolean = true;
  
	properties: INodeProperties[] = [
		{
			displayName: 'GigaChat API secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
		{
			displayName: 'Organization ID (optional)',
			name: 'organizationId',
			type: 'string',
			default: '',
			hint: 'Only required if you belong to multiple organisations',
			description:
				"For users who belong to multiple organizations, you can set which organization is used for an API request. Usage from these API requests will count against the specified organization's subscription quota.",
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.clientSecret}}',
				// 'Organization': '={{$credentials.organizationId}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			apiUrl: string = "https://gigachat.devices.sberbank.ru/api/v1",
			// model: '/v1/models',
		},
	};
}
