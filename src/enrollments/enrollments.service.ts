import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { Enrollment } from './entities/enrollment.entity';
import { DeepPartial, Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { Prerequisite } from 'src/prerequisites/entities/prerequisite.entity';

@Injectable()
export class EnrollmentsService {
  
  constructor(
    @InjectRepository(Prerequisite)
    private readonly prerequisiteRepository: Repository<Prerequisite>,
    @InjectRepository(Enrollment)
    private readonly enrollmentRepository: Repository<Enrollment>,
  ) {}

  async checkPrerequisites(studentId: number, mainSubjectId: number):Promise<boolean> {
    const requiredSubjectsCount = await this.prerequisiteRepository
      .createQueryBuilder('p')
      .select('COUNT(DISTINCT p."requiredSubjectId")', 'required_subjects_count')
      .where('p."mainSubjectId" = :mainSubjectId', { mainSubjectId })
      .getRawOne();
  
    const approvedSubjectsCount = await this.enrollmentRepository
      .createQueryBuilder('e')
      .innerJoin('e.subject', 's')
      .innerJoin('e.student', 'st')
      .select('COUNT(DISTINCT e."subjectId")', 'approved_subjects_count')
      .where('st.id = :studentId', { studentId })
      .andWhere('e.score >= :score', { score: 3 })
      .getRawOne();
  
    return requiredSubjectsCount.required_subjects_count === approvedSubjectsCount.approved_subjects_count;
  }
  

  async create(createEnrollmentDto: CreateEnrollmentDto, id: number) {
    const { subject_id, enrollment_date } = createEnrollmentDto;
    const isPrerequisitesMet: boolean = await this.checkPrerequisites(id, subject_id);
    
    if (!isPrerequisitesMet) {
      throw new BadRequestException('El estudiante no cumple con los requisitos para inscribirse en esta materia.');
    }
    const existingEnrollment = await this.findOne(id, subject_id);

    if (existingEnrollment) {
      throw new BadRequestException('El estudiante ya está inscrito en esta materia.');
    }
  
    const enrollment: DeepPartial<Enrollment> = {
      student: { id }, 
      subject: { id: subject_id },
      enrollment_date,
      status:"Inscrito"
    };
  
    // Usa el valor de 'id' (ID del token) como 'student_id' en la creación de inscripción
    const createdEnrollment = this.enrollmentRepository.create(enrollment);
  
    await this.enrollmentRepository.save(createdEnrollment);
  
    return createdEnrollment;
  }
  

  findAll() {
    return `This action returns all enrollments`;
  }

  async findOne(studentId: number, subjectId: number) {
    const enrollment = await this.enrollmentRepository.findOne({
      where: {
        student: { id: studentId },
        subject: { id: subjectId },
        status: Not('Finalizada'), 
      },
    });
  
    return enrollment;
  }
  
  async updateStatus(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
    // Buscar la inscripción por su ID
    const enrollment = await this.enrollmentRepository.findOne({ where: { id } });
    if (!enrollment) {
      throw new NotFoundException('Inscripción no encontrada');
    }
  
    // Actualizar el status si está definido en el objeto UpdateEnrollmentDto
    if (updateEnrollmentDto) {
      enrollment.status = "Finalizada";
    }
  
    // Actualizar el score si está definido en el objeto UpdateEnrollmentDto
    if (updateEnrollmentDto.score !== undefined) {
      enrollment.score = updateEnrollmentDto.score;
    }
  
    // Guardar la inscripción actualizada en la base de datos
    return this.enrollmentRepository.save(enrollment);
  }
  


  remove(id: number) {
    return `This action removes a #${id} enrollment`;
  }
}
