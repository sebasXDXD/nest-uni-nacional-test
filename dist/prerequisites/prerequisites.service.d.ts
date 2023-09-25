import { CreatePrerequisiteDto } from './dto/create-prerequisite.dto';
import { UpdatePrerequisiteDto } from './dto/update-prerequisite.dto';
import { Prerequisite } from './entities/prerequisite.entity';
import { Repository } from 'typeorm';
export declare class PrerequisitesService {
    private readonly prerequisiteRepository;
    constructor(prerequisiteRepository: Repository<Prerequisite>);
    create(createPrerequisiteDto: CreatePrerequisiteDto): Promise<Prerequisite>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePrerequisiteDto: UpdatePrerequisiteDto): string;
    remove(id: number): string;
}
