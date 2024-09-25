"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = exports.Nested = exports.Config = void 0;
require("reflect-metadata");
const fs_1 = require("fs");
const typedi_1 = require("typedi");
const globalMetadata = new Map();
const readEnv = (envName) => {
    if (envName in process.env)
        return process.env[envName];
    const filePath = process.env[`${envName}_FILE`];
    if (filePath)
        return (0, fs_1.readFileSync)(filePath, 'utf8');
    return undefined;
};
const Config = (ConfigClass) => {
    const factory = function () {
        const config = new ConfigClass();
        const classMetadata = globalMetadata.get(ConfigClass);
        if (!classMetadata) {
            throw new Error('Invalid config class: ' + ConfigClass.name);
        }
        for (const [key, { type, envName }] of classMetadata) {
            if (typeof type === 'function' && globalMetadata.has(type)) {
                config[key] = typedi_1.Container.get(type);
            }
            else if (envName) {
                const value = readEnv(envName);
                if (value === undefined)
                    continue;
                if (type === Number) {
                    const parsed = Number(value);
                    if (isNaN(parsed)) {
                        console.warn(`Invalid number value for ${envName}: ${value}`);
                    }
                    else {
                        config[key] = parsed;
                    }
                }
                else if (type === Boolean) {
                    if (['true', '1'].includes(value.toLowerCase())) {
                        config[key] = true;
                    }
                    else if (['false', '0'].includes(value.toLowerCase())) {
                        config[key] = false;
                    }
                    else {
                        console.warn(`Invalid boolean value for ${envName}: ${value}`);
                    }
                }
                else if (type === String) {
                    config[key] = value;
                }
                else {
                    config[key] = new type(value);
                }
            }
        }
        return config;
    };
    return (0, typedi_1.Service)({ factory })(ConfigClass);
};
exports.Config = Config;
const Nested = (target, key) => {
    const ConfigClass = target.constructor;
    const classMetadata = globalMetadata.get(ConfigClass) ?? new Map();
    const type = Reflect.getMetadata('design:type', target, key);
    classMetadata.set(key, { type });
    globalMetadata.set(ConfigClass, classMetadata);
};
exports.Nested = Nested;
const Env = (envName) => (target, key) => {
    const ConfigClass = target.constructor;
    const classMetadata = globalMetadata.get(ConfigClass) ?? new Map();
    const type = Reflect.getMetadata('design:type', target, key);
    if (type === Object) {
        throw new Error(`Invalid decorator metadata on key "${key}" on ${ConfigClass.name}\n Please use explicit typing on all config fields`);
    }
    classMetadata.set(key, { type, envName });
    globalMetadata.set(ConfigClass, classMetadata);
};
exports.Env = Env;
//# sourceMappingURL=decorators.js.map