"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigSchema = void 0;
const Joi = require("@hapi/joi");
const logger_1 = require("@octopus/common-libs/dist/constants/logger");
exports.ConfigSchema = Joi.object({
    SERVICE_NAME: Joi.string(),
    LOG_LEVEL: Joi.string().valid(logger_1.LOG_LEVEL),
    APP_PORT: Joi.number(),
    REDIS_CONNECTION_STR: Joi.string()
});
//# sourceMappingURL=configuration.schema.js.map