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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const students_service_1 = require("../students/students.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(studentsService, jwtService) {
        this.studentsService = studentsService;
        this.jwtService = jwtService;
    }
    async register(registerDto) {
        const user = await this.studentsService.findByUsername(registerDto.username);
        if (user) {
            throw new common_1.BadRequestException("EL estudiante ya existe");
        }
        return await this.studentsService.create(registerDto);
    }
    async login(loginDto) {
        const student = await this.studentsService.findByUsername(loginDto.username);
        if (!student) {
            throw new common_1.UnauthorizedException("EL usuario no existe");
        }
        const isValidPassword = await bcrypt.compare(loginDto.password, student.password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException("Password incorrecta");
        }
        const payload = { username: student.username, studentId: student.id, };
        const token = await this.jwtService.signAsync(payload);
        return { token, studentId: student.id };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [students_service_1.StudentsService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map