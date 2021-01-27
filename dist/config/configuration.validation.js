"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigValidation = void 0;
const class_validator_1 = require("class-validator");
function ConfigValidation(config) {
    return class_validator_1.validateSync(config);
}
exports.ConfigValidation = ConfigValidation;
//# sourceMappingURL=configuration.validation.js.map