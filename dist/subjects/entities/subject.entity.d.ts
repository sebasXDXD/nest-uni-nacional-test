import { Student } from 'src/students/entities/student.entity';
import { Enrollment } from 'src/enrollments/entities/enrollment.entity';
import { Prerequisite } from 'src/prerequisites/entities/prerequisite.entity';
export declare class Subject {
    id: number;
    name: string;
    description: string;
    code: string;
    professor: string;
    students: Student[];
    enrollments: Enrollment[];
    prerequisitesForThisSubject: Prerequisite[];
    prerequisitesRequiredForThisSubject: Prerequisite[];
}
