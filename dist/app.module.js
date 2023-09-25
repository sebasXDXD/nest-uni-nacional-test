"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const students_module_1 = require("./students/students.module");
const subjects_module_1 = require("./subjects/subjects.module");
const enrollments_module_1 = require("./enrollments/enrollments.module");
const prerequisites_module_1 = require("./prerequisites/prerequisites.module");
const auth_module_1 = require("./auth/auth.module");
const subject_entity_1 = require("./subjects/entities/subject.entity");
const student_entity_1 = require("./students/entities/student.entity");
const enrollment_entity_1 = require("./enrollments/entities/enrollment.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'sebas_cruds',
                password: 'root',
                database: 'uni_nacional_db',
                autoLoadEntities: true,
                entities: [student_entity_1.Student, subject_entity_1.Subject, enrollment_entity_1.Enrollment],
                synchronize: true,
            }),
            students_module_1.StudentsModule,
            subjects_module_1.SubjectsModule,
            enrollments_module_1.EnrollmentsModule,
            prerequisites_module_1.PrerequisitesModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map