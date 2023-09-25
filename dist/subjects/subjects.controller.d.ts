import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
export declare class SubjectsController {
    private readonly subjectsService;
    constructor(subjectsService: SubjectsService);
    create(createSubjectDto: CreateSubjectDto): string;
    findSubjectsApprove(request: any): Promise<any[]>;
    findSubjectsReprobate(request: any): Promise<any[]>;
    findAllByStudent(request: any): Promise<any[]>;
    update(id: string, updateSubjectDto: UpdateSubjectDto): string;
    remove(id: string): string;
}
