import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const configService: ConfigService = app.get(ConfigService);
  await app.listen(configService.get('PORT'), () => Logger.log(`App started at ${configService.get('PORT')}`));
}
bootstrap();
