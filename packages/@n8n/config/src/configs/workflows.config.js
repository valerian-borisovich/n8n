"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowsConfig = void 0;
const decorators_1 = require("../decorators");
let WorkflowsConfig = class WorkflowsConfig {
    constructor() {
        this.defaultName = 'My workflow';
        this.onboardingFlowDisabled = false;
        this.callerPolicyDefaultOption = 'workflowsFromSameOwner';
    }
};
exports.WorkflowsConfig = WorkflowsConfig;
__decorate([
    (0, decorators_1.Env)('WORKFLOWS_DEFAULT_NAME'),
    __metadata("design:type", String)
], WorkflowsConfig.prototype, "defaultName", void 0);
__decorate([
    (0, decorators_1.Env)('N8N_ONBOARDING_FLOW_DISABLED'),
    __metadata("design:type", Boolean)
], WorkflowsConfig.prototype, "onboardingFlowDisabled", void 0);
__decorate([
    (0, decorators_1.Env)('N8N_WORKFLOW_CALLER_POLICY_DEFAULT_OPTION'),
    __metadata("design:type", String)
], WorkflowsConfig.prototype, "callerPolicyDefaultOption", void 0);
exports.WorkflowsConfig = WorkflowsConfig = __decorate([
    decorators_1.Config
], WorkflowsConfig);
//# sourceMappingURL=workflows.config.js.map