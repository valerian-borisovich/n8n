declare class LoggingConfig {
    enabled: boolean;
    options: 'query' | 'error' | 'schema' | 'warn' | 'info' | 'log' | 'all';
    maxQueryExecutionTime: number;
}
declare class PostgresSSLConfig {
    enabled: boolean;
    ca: string;
    cert: string;
    key: string;
    rejectUnauthorized: boolean;
}
declare class PostgresConfig {
    database: string;
    host: string;
    password: string;
    port: number;
    user: string;
    schema: string;
    poolSize: number;
    connectionTimeoutMs: number;
    ssl: PostgresSSLConfig;
}
declare class MysqlConfig {
    database: string;
    host: string;
    password: string;
    port: number;
    user: string;
}
declare class SqliteConfig {
    database: string;
    poolSize: number;
    enableWAL: boolean;
    executeVacuumOnStartup: boolean;
}
export declare class DatabaseConfig {
    type: 'sqlite' | 'mariadb' | 'mysqldb' | 'postgresdb';
    tablePrefix: string;
    logging: LoggingConfig;
    postgresdb: PostgresConfig;
    mysqldb: MysqlConfig;
    sqlite: SqliteConfig;
}
export {};
