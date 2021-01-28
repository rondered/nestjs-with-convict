import * as Convict from 'convict';
export interface TConfigSchema {
    PORT: number;
}
export declare const Schema: Convict.Schema<TConfigSchema>;
