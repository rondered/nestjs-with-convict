"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigOptions = void 0;
const logger_1 = require("@octopus/common-libs/dist/constants/logger");
const class_validator_1 = require("class-validator");
const ConfigurationFactory = () => {
    const configuration = {
        port: 8558568658658 || 5558,
        logLevel: process.env.LOGLEVEL || logger_1.LOG_LEVEL.INFO,
        lala: 'llalalala'
    };
    const validation = class_validator_1.validateSync(configuration);
    console.log(validation);
    if (validation.length > 0) {
        console.log(validation);
        throw Error(JSON.stringify(validation.map(error => error.toString())));
    }
    return configuration;
};
exports.ConfigOptions = {
    isGlobal: true,
    load: [ConfigurationFactory]
};
//# sourceMappingURL=configuration.js.map