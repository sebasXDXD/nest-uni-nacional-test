"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrerequisitesModule = void 0;
const common_1 = require("@nestjs/common");
const prerequisites_service_1 = require("./prerequisites.service");
const prerequisites_controller_1 = require("./prerequisites.controller");
const prerequisite_entity_1 = require("./entities/prerequisite.entity");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const jwt_1 = require("@nestjs/jwt");
let PrerequisitesModule = class PrerequisitesModule {
};
exports.PrerequisitesModule = PrerequisitesModule;
exports.PrerequisitesModule = PrerequisitesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([prerequisite_entity_1.Prerequisite]),
        ],
        controllers: [prerequisites_controller_1.PrerequisitesController],
        providers: [prerequisites_service_1.PrerequisitesService, jwt_auth_guard_1.AuthGuard, jwt_1.JwtService],
    })
], PrerequisitesModule);
//# sourceMappingURL=prerequisites.module.js.map