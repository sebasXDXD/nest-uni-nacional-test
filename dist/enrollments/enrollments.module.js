"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentsModule = void 0;
const common_1 = require("@nestjs/common");
const enrollments_service_1 = require("./enrollments.service");
const enrollments_controller_1 = require("./enrollments.controller");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const jwt_1 = require("@nestjs/jwt");
const enrollment_entity_1 = require("./entities/enrollment.entity");
const student_entity_1 = require("../students/entities/student.entity");
const subject_entity_1 = require("../subjects/entities/subject.entity");
const typeorm_1 = require("@nestjs/typeorm");
const prerequisite_entity_1 = require("../prerequisites/entities/prerequisite.entity");
let EnrollmentsModule = class EnrollmentsModule {
};
exports.EnrollmentsModule = EnrollmentsModule;
exports.EnrollmentsModule = EnrollmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([enrollment_entity_1.Enrollment, student_entity_1.Student, subject_entity_1.Subject, prerequisite_entity_1.Prerequisite]),
        ],
        controllers: [enrollments_controller_1.EnrollmentsController],
        providers: [enrollments_service_1.EnrollmentsService, jwt_1.JwtService, jwt_auth_guard_1.AuthGuard],
        exports: [enrollments_service_1.EnrollmentsService]
    })
], EnrollmentsModule);
//# sourceMappingURL=enrollments.module.js.map