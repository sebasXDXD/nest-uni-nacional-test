import { Subject } from 'src/subjects/entities/subject.entity';
import { Enrollment } from 'src/enrollments/entities/enrollment.entity';
export declare class Student {
    id: number;
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    identification_number: string;
    address: string;
    email: string;
    password: string;
    username: string;
    subjects: Subject[];
    enrollments: Enrollment[];
}
