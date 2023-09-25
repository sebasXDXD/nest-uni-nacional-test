import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePrerequisiteDto } from './dto/create-prerequisite.dto';
import { UpdatePrerequisiteDto } from './dto/update-prerequisite.dto';
import { Prerequisite } from './entities/prerequisite.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PrerequisitesService {
  constructor(
    @InjectRepository(Prerequisite)
    private readonly prerequisiteRepository: Repository<Prerequisite>,
  ) {}

  async create(createPrerequisiteDto: CreatePrerequisiteDto) {
    // Crear una nueva instancia de Prerequisite utilizando los valores del DTO
    const newPrerequisite = this.prerequisiteRepository.create(createPrerequisiteDto);
    
    const savedPrerequisite = await this.prerequisiteRepository.save(newPrerequisite);

    return savedPrerequisite;
  }

  findAll() {
    return `This action returns all prerequisites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prerequisite`;
  }

  update(id: number, updatePrerequisiteDto: UpdatePrerequisiteDto) {
    return `This action updates a #${id} prerequisite`;
  }

  remove(id: number) {
    return `This action removes a #${id} prerequisite`;
  }
}
