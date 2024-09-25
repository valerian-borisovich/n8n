declare class JsonStringArray extends Array<string> {
    constructor(str: string);
}
declare class CommunityPackagesConfig {
    enabled: boolean;
    registry: string;
    reinstallMissing: boolean;
}
export declare class NodesConfig {
    include: JsonStringArray;
    exclude: JsonStringArray;
    errorTriggerType: string;
    communityPackages: CommunityPackagesConfig;
}
export {};
