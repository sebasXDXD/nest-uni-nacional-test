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
exports.SubjectsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const subject_entity_1 = require("./entities/subject.entity");
let SubjectsService = class SubjectsService {
    constructor(subjectRepository) {
        this.subjectRepository = subjectRepository;
    }
    create(createSubjectDto) {
        return 'This action adds a new subject';
    }
    async findAllByStudent(studentId) {
        try {
            const query = this.subjectRepository
                .createQueryBuilder('s')
                .innerJoin('enrollment', 'e', 's.id = e."subjectId"')
                .innerJoin('students', 'st', 'e."studentId" = st.id')
                .select(['s.*', 'e.*'])
                .where('e.status = :status AND st.id = :studentId', { status: 'Inscrito', studentId });
            const subjects = await query.getRawMany();
            if (!subjects || subjects.length === 0) {
                throw new common_1.NotFoundException('Estudiante no encontrado');
            }
            return subjects;
        }
        catch (error) {
            console.error(error);
            throw new common_1.NotFoundException('Error al buscar asignaturas por estudiante');
        }
    }
    async findApprove(studentId) {
        try {
            const query = this.subjectRepository
                .createQueryBuilder('s')
                .innerJoin('enrollment', 'e', 's.id = e."subjectId"')
                .innerJoin('students', 'st', 'e."studentId" = st.id')
                .select(['s.*', 'e.*'])
                .where('e.score >= :score AND st.id = :studentId', { score: 3, studentId });
            const subjects = await query.getRawMany();
            if (!subjects || subjects.length === 0) {
                throw new common_1.NotFoundException('Estudiante no encontrado');
            }
            return subjects;
        }
        catch (error) {
            console.error(error);
            throw new common_1.NotFoundException('Error al buscar asignaturas aprobadas por estudiante');
        }
    }
    async findReprobate(studentId) {
        try {
            const query = this.subjectRepository
                .createQueryBuilder('s')
                .innerJoin('enrollment', 'e', 's.id = e."subjectId"')
                .innerJoin('students', 'st', 'e."studentId" = st.id')
                .select(['s.*', 'e.*'])
                .where('e.score < :score AND st.id = :studentId', { score: 3, studentId });
            const subjects = await query.getRawMany();
            if (!subjects || subjects.length === 0) {
                throw new common_1.NotFoundException('Estudiante no encontrado');
            }
            return subjects;
        }
        catch (error) {
            console.error(error);
            throw new common_1.NotFoundException('Error al buscar asignaturas aprobadas por estudiante');
        }
    }
    update(id, updateSubjectDto) {
        return `This action updates a #${id} subject`;
    }
    remove(id) {
        return `This action removes a #${id} subject`;
    }
};
exports.SubjectsService = SubjectsService;
exports.SubjectsService = SubjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subject_entity_1.Subject)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubjectsService);
//# sourceMappingURL=subjects.service.js.map