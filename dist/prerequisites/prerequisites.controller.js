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
exports.PrerequisitesController = void 0;
const common_1 = require("@nestjs/common");
const prerequisites_service_1 = require("./prerequisites.service");
const create_prerequisite_dto_1 = require("./dto/create-prerequisite.dto");
const update_prerequisite_dto_1 = require("./dto/update-prerequisite.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let PrerequisitesController = class PrerequisitesController {
    constructor(prerequisitesService) {
        this.prerequisitesService = prerequisitesService;
    }
    create(createPrerequisiteDto) {
        return this.prerequisitesService.create(createPrerequisiteDto);
    }
    findAll() {
        return this.prerequisitesService.findAll();
    }
    findOne(id) {
        return this.prerequisitesService.findOne(+id);
    }
    update(id, updatePrerequisiteDto) {
        return this.prerequisitesService.update(+id, updatePrerequisiteDto);
    }
    remove(id) {
        return this.prerequisitesService.remove(+id);
    }
};
exports.PrerequisitesController = PrerequisitesController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prerequisite_dto_1.CreatePrerequisiteDto]),
    __metadata("design:returntype", void 0)
], PrerequisitesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrerequisitesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrerequisitesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_prerequisite_dto_1.UpdatePrerequisiteDto]),
    __metadata("design:returntype", void 0)
], PrerequisitesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrerequisitesController.prototype, "remove", null);
exports.PrerequisitesController = PrerequisitesController = __decorate([
    (0, common_1.Controller)('prerequisites'),
    __metadata("design:paramtypes", [prerequisites_service_1.PrerequisitesService])
], PrerequisitesController);
//# sourceMappingURL=prerequisites.controller.js.map