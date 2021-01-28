"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const common_1 = require("@nestjs/common");
const config_service_1 = require("./config/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    const configService = app.get(config_service_1.ConfigService);
    await app.listen(configService.get('PORT'), () => common_1.Logger.log(`App started at ${configService.get('PORT')}`));
}
bootstrap();
//# sourceMappingURL=main.js.map