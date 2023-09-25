import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { Enrollment } from './entities/enrollment.entity';
import { Repository } from 'typeorm';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { Prerequisite } from 'src/prerequisites/entities/prerequisite.entity';
export declare class EnrollmentsService {
    private readonly prerequisiteRepository;
    private readonly enrollmentRepository;
    constructor(prerequisiteRepository: Repository<Prerequisite>, enrollmentRepository: Repository<Enrollment>);
    checkPrerequisites(studentId: number, mainSubjectId: number): Promise<boolean>;
    create(createEnrollmentDto: CreateEnrollmentDto, id: number): Promise<Enrollment>;
    findAll(): string;
    findOne(studentId: number, subjectId: number): Promise<Enrollment>;
    updateStatus(id: number, updateEnrollmentDto: UpdateEnrollmentDto): Promise<Enrollment>;
    remove(id: number): string;
}
