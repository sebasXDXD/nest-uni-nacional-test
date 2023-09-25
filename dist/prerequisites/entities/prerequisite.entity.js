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
exports.Prerequisite = void 0;
const typeorm_1 = require("typeorm");
const subject_entity_1 = require("../../subjects/entities/subject.entity");
let Prerequisite = class Prerequisite {
};
exports.Prerequisite = Prerequisite;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Prerequisite.prototype, "prerequisite_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subject_entity_1.Subject, (subject) => subject.prerequisitesForThisSubject, { onDelete: 'CASCADE' }),
    __metadata("design:type", subject_entity_1.Subject)
], Prerequisite.prototype, "main_subject", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subject_entity_1.Subject, (subject) => subject.prerequisitesRequiredForThisSubject, { onDelete: 'CASCADE' }),
    __metadata("design:type", subject_entity_1.Subject)
], Prerequisite.prototype, "required_subject", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Prerequisite.prototype, "additional_note", void 0);
exports.Prerequisite = Prerequisite = __decorate([
    (0, typeorm_1.Entity)()
], Prerequisite);
//# sourceMappingURL=prerequisite.entity.js.map