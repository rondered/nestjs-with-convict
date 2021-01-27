import { ConfigFactory } from "@nestjs/config/dist/interfaces";
interface TConfig {
    port: number;
}
declare const configuration: ConfigFactory<TConfig>;
export default configuration;
