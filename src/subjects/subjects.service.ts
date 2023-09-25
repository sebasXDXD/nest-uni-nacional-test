import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectsService {
  constructor(
    
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) { }
  create(createSubjectDto: CreateSubjectDto) {
    return 'This action adds a new subject';
  }

  async findAllByStudent(studentId: number) {
    try {
      const query = this.subjectRepository
      .createQueryBuilder('s')
      .innerJoin('enrollment', 'e', 's.id = e."subjectId"')
      .innerJoin('students', 'st', 'e."studentId" = st.id')
      .select(['s.*'])
      .where('e.status = :status AND st.id = :studentId', { status: 'Inscrito', studentId });
    
    const subjects = await query.getRawMany();

      if (!subjects || subjects.length === 0) {
        throw new NotFoundException('Estudiante no encontrado');
      }
      return subjects;
    } catch (error) {
      // Maneja el error adecuadamente (puedes imprimirlo o devolver un mensaje de error).
      console.error(error);
      throw new NotFoundException('Error al buscar asignaturas por estudiante');
    }
  }


  async findApprove(studentId: number) {
    try {
      const query = this.subjectRepository
        .createQueryBuilder('s')
        .innerJoin('enrollment', 'e', 's.id = e."subjectId"')
        .innerJoin('students', 'st', 'e."studentId" = st.id')
        .select(['s.*'])
        .where('e.score >= :score AND st.id = :studentId', { score: 3, studentId });
  
      const subjects = await query.getRawMany();
  
      if (!subjects || subjects.length === 0) {
        throw new NotFoundException('Estudiante no encontrado');
      }
      return subjects;
    } catch (error) {
      // Maneja el error adecuadamente (puedes imprimirlo o devolver un mensaje de error).
      console.error(error);
      throw new NotFoundException('Error al buscar asignaturas aprobadas por estudiante');
    }
  }
  
  async findReprobate(studentId: number) {
    try {
      const query = this.subjectRepository
        .createQueryBuilder('s')
        .innerJoin('enrollment', 'e', 's.id = e."subjectId"')
        .innerJoin('students', 'st', 'e."studentId" = st.id')
        .select(['s.*'])
        .where('e.score < :score AND st.id = :studentId', { score: 3, studentId });
  
      const subjects = await query.getRawMany();
  
      if (!subjects || subjects.length === 0) {
        throw new NotFoundException('Estudiante no encontrado');
      }
      return subjects;
    } catch (error) {
      // Maneja el error adecuadamente (puedes imprimirlo o devolver un mensaje de error).
      console.error(error);
      throw new NotFoundException('Error al buscar asignaturas aprobadas por estudiante');
    }
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return `This action updates a #${id} subject`;
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }
}
