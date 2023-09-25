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
exports.Subject = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("../../students/entities/student.entity");
const enrollment_entity_1 = require("../../enrollments/entities/enrollment.entity");
const prerequisite_entity_1 = require("../../prerequisites/entities/prerequisite.entity");
let Subject = class Subject {
};
exports.Subject = Subject;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Subject.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Subject.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Subject.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Subject.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Subject.prototype, "professor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_entity_1.Student, (student) => student.subjects),
    __metadata("design:type", Array)
], Subject.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => enrollment_entity_1.Enrollment, (enrollment) => enrollment.subject),
    __metadata("design:type", Array)
], Subject.prototype, "enrollments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prerequisite_entity_1.Prerequisite, (prerequisite) => prerequisite.main_subject),
    __metadata("design:type", Array)
], Subject.prototype, "prerequisitesForThisSubject", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prerequisite_entity_1.Prerequisite, (prerequisite) => prerequisite.required_subject),
    __metadata("design:type", Array)
], Subject.prototype, "prerequisitesRequiredForThisSubject", void 0);
exports.Subject = Subject = __decorate([
    (0, typeorm_1.Entity)()
], Subject);
//# sourceMappingURL=subject.entity.js.map