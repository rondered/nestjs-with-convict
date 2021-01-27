import convict from "convict";
interface TConfigSchema {
    port: number;
}
export declare const schema: convict.Schema<TConfigSchema>;
export {};
