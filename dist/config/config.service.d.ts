import * as Convict from 'convict';
import { TConfigSchema } from './config.schema';
export declare class ConfigService {
    config: Convict.Config<TConfigSchema>;
    constructor();
    get(configName: string): any;
}
