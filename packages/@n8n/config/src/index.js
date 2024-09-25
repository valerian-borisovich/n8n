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
exports.GlobalConfig = void 0;
const cache_config_1 = require("./configs/cache.config");
const credentials_config_1 = require("./configs/credentials.config");
const database_config_1 = require("./configs/database.config");
const endpoints_config_1 = require("./configs/endpoints.config");
const event_bus_config_1 = require("./configs/event-bus.config");
const external_secrets_config_1 = require("./configs/external-secrets.config");
const external_storage_config_1 = require("./configs/external-storage.config");
const nodes_config_1 = require("./configs/nodes.config");
const public_api_config_1 = require("./configs/public-api.config");
const scaling_mode_config_1 = require("./configs/scaling-mode.config");
const sentry_config_1 = require("./configs/sentry.config");
const templates_config_1 = require("./configs/templates.config");
const user_management_config_1 = require("./configs/user-management.config");
const version_notifications_config_1 = require("./configs/version-notifications.config");
const workflows_config_1 = require("./configs/workflows.config");
const decorators_1 = require("./decorators");
let GlobalConfig = class GlobalConfig {
    constructor() {
        this.path = '/';
        this.host = 'localhost';
        this.port = 5678;
        this.listen_address = '0.0.0.0';
        this.protocol = 'http';
    }
};
exports.GlobalConfig = GlobalConfig;
__decorate([
    decorators_1.Nested,
    __metadata("design:type", database_config_1.DatabaseConfig)
], GlobalConfig.prototype, "database", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", credentials_config_1.CredentialsConfig)
], GlobalConfig.prototype, "credentials", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", user_management_config_1.UserManagementConfig)
], GlobalConfig.prototype, "userManagement", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", version_notifications_config_1.VersionNotificationsConfig)
], GlobalConfig.prototype, "versionNotifications", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", public_api_config_1.PublicApiConfig)
], GlobalConfig.prototype, "publicApi", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", external_secrets_config_1.ExternalSecretsConfig)
], GlobalConfig.prototype, "externalSecrets", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", templates_config_1.TemplatesConfig)
], GlobalConfig.prototype, "templates", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", event_bus_config_1.EventBusConfig)
], GlobalConfig.prototype, "eventBus", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", nodes_config_1.NodesConfig)
], GlobalConfig.prototype, "nodes", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", external_storage_config_1.ExternalStorageConfig)
], GlobalConfig.prototype, "externalStorage", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", workflows_config_1.WorkflowsConfig)
], GlobalConfig.prototype, "workflows", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", sentry_config_1.SentryConfig)
], GlobalConfig.prototype, "sentry", void 0);
__decorate([
    (0, decorators_1.Env)('N8N_PATH'),
    __metadata("design:type", String)
], GlobalConfig.prototype, "path", void 0);
__decorate([
    (0, decorators_1.Env)('N8N_HOST'),
    __metadata("design:type", String)
], GlobalConfig.prototype, "host", void 0);
__decorate([
    (0, decorators_1.Env)('N8N_PORT'),
    __metadata("design:type", Number)
], GlobalConfig.prototype, "port", void 0);
__decorate([
    (0, decorators_1.Env)('N8N_LISTEN_ADDRESS'),
    __metadata("design:type", String)
], GlobalConfig.prototype, "listen_address", void 0);
__decorate([
    (0, decorators_1.Env)('N8N_PROTOCOL'),
    __metadata("design:type", String)
], GlobalConfig.prototype, "protocol", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", endpoints_config_1.EndpointsConfig)
], GlobalConfig.prototype, "endpoints", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", cache_config_1.CacheConfig)
], GlobalConfig.prototype, "cache", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", scaling_mode_config_1.ScalingModeConfig)
], GlobalConfig.prototype, "queue", void 0);
exports.GlobalConfig = GlobalConfig = __decorate([
    decorators_1.Config
], GlobalConfig);
//# sourceMappingURL=index.js.map