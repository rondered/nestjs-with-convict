import { LOG_LEVEL } from '@octopus/common-libs/dist/constants/logger';
declare class EnvironmentVariables {
    LOGLEVEL: LOG_LEVEL;
    PORT: number;
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
export {};
