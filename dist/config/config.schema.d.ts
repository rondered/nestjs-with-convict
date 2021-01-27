import convict from "convict";
export interface TConfigSchema {
    PORT: number;
}
export declare const Schema: convict.Schema<TConfigSchema>;
