"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectsModule = void 0;
const common_1 = require("@nestjs/common");
const subjects_service_1 = require("./subjects.service");
const subjects_controller_1 = require("./subjects.controller");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const students_module_1 = require("../students/students.module");
const subject_entity_1 = require("./entities/subject.entity");
const student_entity_1 = require("../students/entities/student.entity");
let SubjectsModule = class SubjectsModule {
};
exports.SubjectsModule = SubjectsModule;
exports.SubjectsModule = SubjectsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            students_module_1.StudentsModule,
            typeorm_1.TypeOrmModule.forFeature([subject_entity_1.Subject, student_entity_1.Student]),
        ],
        controllers: [subjects_controller_1.SubjectsController],
        providers: [subjects_service_1.SubjectsService, jwt_1.JwtService, jwt_auth_guard_1.AuthGuard],
    })
], SubjectsModule);
//# sourceMappingURL=subjects.module.js.map