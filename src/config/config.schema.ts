import * as Convict from 'convict';

export interface TConfigSchema {
    PORT: number
}

export const Schema: Convict.Schema<TConfigSchema> = {
    PORT: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3000,
        env: 'PORT',
        arg: 'port'
    }
}