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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectsController = void 0;
const common_1 = require("@nestjs/common");
const subjects_service_1 = require("./subjects.service");
const create_subject_dto_1 = require("./dto/create-subject.dto");
const update_subject_dto_1 = require("./dto/update-subject.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let SubjectsController = class SubjectsController {
    constructor(subjectsService) {
        this.subjectsService = subjectsService;
    }
    create(createSubjectDto) {
        return this.subjectsService.create(createSubjectDto);
    }
    findSubjectsApprove(request) {
        const id = request.student.studentId;
        return this.subjectsService.findApprove(+id);
    }
    findSubjectsReprobate(request) {
        const id = request.student.studentId;
        return this.subjectsService.findReprobate(+id);
    }
    findAllByStudent(request) {
        const studentId = request.student.studentId;
        return this.subjectsService.findAllByStudent(studentId);
    }
    update(id, updateSubjectDto) {
        return this.subjectsService.update(+id, updateSubjectDto);
    }
    remove(id) {
        return this.subjectsService.remove(+id);
    }
};
exports.SubjectsController = SubjectsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subject_dto_1.CreateSubjectDto]),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('approved'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "findSubjectsApprove", null);
__decorate([
    (0, common_1.Get)('reprobate'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "findSubjectsReprobate", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "findAllByStudent", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subject_dto_1.UpdateSubjectDto]),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubjectsController.prototype, "remove", null);
exports.SubjectsController = SubjectsController = __decorate([
    (0, common_1.Controller)('subjects'),
    __metadata("design:paramtypes", [subjects_service_1.SubjectsService])
], SubjectsController);
//# sourceMappingURL=subjects.controller.js.map