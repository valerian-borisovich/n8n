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
exports.ExternalStorageConfig = void 0;
const decorators_1 = require("../decorators");
let S3BucketConfig = class S3BucketConfig {
    constructor() {
        this.name = '';
        this.region = '';
    }
};
__decorate([
    (0, decorators_1.Env)('N8N_EXTERNAL_STORAGE_S3_BUCKET_NAME'),
    __metadata("design:type", String)
], S3BucketConfig.prototype, "name", void 0);
__decorate([
    (0, decorators_1.Env)('N8N_EXTERNAL_STORAGE_S3_BUCKET_REGION'),
    __metadata("design:type", String)
], S3BucketConfig.prototype, "region", void 0);
S3BucketConfig = __decorate([
    decorators_1.Config
], S3BucketConfig);
let S3CredentialsConfig = class S3CredentialsConfig {
    constructor() {
        this.accessKey = '';
        this.accessSecret = '';
    }
};
__decorate([
    (0, decorators_1.Env)('N8N_EXTERNAL_STORAGE_S3_ACCESS_KEY'),
    __metadata("design:type", String)
], S3CredentialsConfig.prototype, "accessKey", void 0);
__decorate([
    (0, decorators_1.Env)('N8N_EXTERNAL_STORAGE_S3_ACCESS_SECRET'),
    __metadata("design:type", String)
], S3CredentialsConfig.prototype, "accessSecret", void 0);
S3CredentialsConfig = __decorate([
    decorators_1.Config
], S3CredentialsConfig);
let S3Config = class S3Config {
    constructor() {
        this.host = '';
    }
};
__decorate([
    (0, decorators_1.Env)('N8N_EXTERNAL_STORAGE_S3_HOST'),
    __metadata("design:type", String)
], S3Config.prototype, "host", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", S3BucketConfig)
], S3Config.prototype, "bucket", void 0);
__decorate([
    decorators_1.Nested,
    __metadata("design:type", S3CredentialsConfig)
], S3Config.prototype, "credentials", void 0);
S3Config = __decorate([
    decorators_1.Config
], S3Config);
let ExternalStorageConfig = class ExternalStorageConfig {
};
exports.ExternalStorageConfig = ExternalStorageConfig;
__decorate([
    decorators_1.Nested,
    __metadata("design:type", S3Config)
], ExternalStorageConfig.prototype, "s3", void 0);
exports.ExternalStorageConfig = ExternalStorageConfig = __decorate([
    decorators_1.Config
], ExternalStorageConfig);
//# sourceMappingURL=external-storage.config.js.map