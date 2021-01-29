import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {

  static forRoot(entities = [], options?): DynamicModule {
    return {
      module: ConfigModule,
      global: true
    }
  }
}
