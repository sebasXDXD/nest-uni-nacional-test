import { PrerequisitesService } from './prerequisites.service';
import { CreatePrerequisiteDto } from './dto/create-prerequisite.dto';
import { UpdatePrerequisiteDto } from './dto/update-prerequisite.dto';
export declare class PrerequisitesController {
    private readonly prerequisitesService;
    constructor(prerequisitesService: PrerequisitesService);
    create(createPrerequisiteDto: CreatePrerequisiteDto): Promise<import("./entities/prerequisite.entity").Prerequisite>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePrerequisiteDto: UpdatePrerequisiteDto): string;
    remove(id: string): string;
}
