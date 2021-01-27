"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigDTO = void 0;
const class_validator_1 = require("class-validator");
const logger_1 = require("@octopus/common-libs/dist/constants/logger");
class ConfigDTO {
}
__decorate([
    class_validator_1.IsEnum(logger_1.LOG_LEVEL),
    __metadata("design:type", String)
], ConfigDTO.prototype, "logLevel", void 0);
__decorate([
    class_validator_1.IsPort(),
    __metadata("design:type", Number)
], ConfigDTO.prototype, "port", void 0);
__decorate([
    class_validator_1.Length(1, 2),
    __metadata("design:type", String)
], ConfigDTO.prototype, "lala", void 0);
exports.ConfigDTO = ConfigDTO;
//# sourceMappingURL=configuration.dto.js.map