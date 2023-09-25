import { Student } from 'src/students/entities/student.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
export declare class Enrollment {
    id: number;
    student: Student;
    subject: Subject;
    enrollment_date: Date;
    status: string;
    score: number | null;
}
