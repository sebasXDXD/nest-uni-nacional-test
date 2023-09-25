import { RegisterDto } from './dto/register.student.dto';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
export declare class StudentsService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    create(registerDto: RegisterDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findByUsername(username: string): Promise<Student>;
}
