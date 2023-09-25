import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';
export declare class SubjectsService {
    private readonly subjectRepository;
    constructor(subjectRepository: Repository<Subject>);
    create(createSubjectDto: CreateSubjectDto): string;
    findAllByStudent(studentId: number): Promise<any[]>;
    findApprove(studentId: number): Promise<any[]>;
    findReprobate(studentId: number): Promise<any[]>;
    update(id: number, updateSubjectDto: UpdateSubjectDto): string;
    remove(id: number): string;
}
