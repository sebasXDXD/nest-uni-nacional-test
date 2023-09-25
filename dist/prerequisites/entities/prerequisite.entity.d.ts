import { Subject } from 'src/subjects/entities/subject.entity';
export declare class Prerequisite {
    prerequisite_id: number;
    main_subject: Subject;
    required_subject: Subject;
    additional_note: string | null;
}
