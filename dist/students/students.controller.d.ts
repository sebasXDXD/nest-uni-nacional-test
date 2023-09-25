import { StudentsService } from './students.service';
import { RegisterDto } from './dto/register.student.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(registerStudentDto: RegisterDto): Promise<import("./entities/student.entity").Student>;
    findAll(): Promise<import("./entities/student.entity").Student[]>;
}
