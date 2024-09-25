declare class HealthConfig {
    active: boolean;
    port: number;
}
declare class RedisConfig {
    db: number;
    host: string;
    password: string;
    port: number;
    timeoutThreshold: number;
    username: string;
    clusterNodes: string;
    tls: boolean;
}
declare class SettingsConfig {
    lockDuration: number;
    lockRenewTime: number;
    stalledInterval: number;
    maxStalledCount: number;
}
declare class BullConfig {
    prefix: string;
    redis: RedisConfig;
    queueRecoveryInterval: number;
    gracefulShutdownTimeout: number;
    settings: SettingsConfig;
}
export declare class ScalingModeConfig {
    health: HealthConfig;
    bull: BullConfig;
}
export {};
