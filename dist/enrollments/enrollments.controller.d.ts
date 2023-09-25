import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
export declare class EnrollmentsController {
    private readonly enrollmentsService;
    constructor(enrollmentsService: EnrollmentsService);
    create(createEnrollmentDto: CreateEnrollmentDto, req: any): Promise<import("./entities/enrollment.entity").Enrollment>;
    findAll(): string;
    updateStatus(id: number, updateEnrollmentDto: UpdateEnrollmentDto): Promise<import("./entities/enrollment.entity").Enrollment>;
    remove(id: string): string;
}
