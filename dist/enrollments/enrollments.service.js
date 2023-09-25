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
exports.EnrollmentsService = void 0;
const common_1 = require("@nestjs/common");
const enrollment_entity_1 = require("./entities/enrollment.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const prerequisite_entity_1 = require("../prerequisites/entities/prerequisite.entity");
let EnrollmentsService = class EnrollmentsService {
    constructor(prerequisiteRepository, enrollmentRepository) {
        this.prerequisiteRepository = prerequisiteRepository;
        this.enrollmentRepository = enrollmentRepository;
    }
    async checkPrerequisites(studentId, mainSubjectId) {
        const requiredSubjectsCount = await this.prerequisiteRepository
            .createQueryBuilder('p')
            .select('COUNT(DISTINCT p."requiredSubjectId")', 'required_subjects_count')
            .where('p."mainSubjectId" = :mainSubjectId', { mainSubjectId })
            .getRawOne();
        const approvedSubjectsCount = await this.enrollmentRepository
            .createQueryBuilder('e')
            .innerJoin('e.subject', 's')
            .innerJoin('e.student', 'st')
            .select('COUNT(DISTINCT e."subjectId")', 'approved_subjects_count')
            .where('st.id = :studentId', { studentId })
            .andWhere('e.score >= :score', { score: 3 })
            .getRawOne();
        return requiredSubjectsCount.required_subjects_count === approvedSubjectsCount.approved_subjects_count;
    }
    async create(createEnrollmentDto, id) {
        const { subject_id, enrollment_date } = createEnrollmentDto;
        const isPrerequisitesMet = await this.checkPrerequisites(id, subject_id);
        if (!isPrerequisitesMet) {
            throw new common_1.BadRequestException('El estudiante no cumple con los requisitos para inscribirse en esta materia.');
        }
        const existingEnrollment = await this.findOne(id, subject_id);
        if (existingEnrollment) {
            throw new common_1.BadRequestException('El estudiante ya está inscrito en esta materia.');
        }
        const enrollment = {
            student: { id },
            subject: { id: subject_id },
            enrollment_date,
            status: "Inscrito"
        };
        const createdEnrollment = this.enrollmentRepository.create(enrollment);
        await this.enrollmentRepository.save(createdEnrollment);
        return createdEnrollment;
    }
    findAll() {
        return `This action returns all enrollments`;
    }
    async findOne(studentId, subjectId) {
        const enrollment = await this.enrollmentRepository.findOne({
            where: {
                student: { id: studentId },
                subject: { id: subjectId },
                status: (0, typeorm_1.Not)('Finalizada'),
            },
        });
        return enrollment;
    }
    async updateStatus(id, updateEnrollmentDto) {
        const enrollment = await this.enrollmentRepository.findOne({ where: { id } });
        if (!enrollment) {
            throw new common_1.NotFoundException('Inscripción no encontrada');
        }
        if (updateEnrollmentDto) {
            enrollment.status = "Finalizada";
        }
        if (updateEnrollmentDto.score !== undefined) {
            enrollment.score = updateEnrollmentDto.score;
        }
        return this.enrollmentRepository.save(enrollment);
    }
    remove(id) {
        return `This action removes a #${id} enrollment`;
    }
};
exports.EnrollmentsService = EnrollmentsService;
exports.EnrollmentsService = EnrollmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(prerequisite_entity_1.Prerequisite)),
    __param(1, (0, typeorm_2.InjectRepository)(enrollment_entity_1.Enrollment)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], EnrollmentsService);
//# sourceMappingURL=enrollments.service.js.map