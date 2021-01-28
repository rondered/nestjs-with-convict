import { Injectable } from '@nestjs/common';
import * as Convict from 'convict';
import { Schema, TConfigSchema } from './config.schema';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {

    config: Convict.Config<TConfigSchema>;

    constructor() {
        this.config = Convict(Schema);
        const dotEnvFile = dotenv.config().parsed;
        if (dotEnvFile) {
            this.config.load(dotenv.config().parsed);
        }
        this.config.validate({ allowed: 'warn' });
    }

    get(configName: string) {
        return this.config.get(configName);
    }



}
