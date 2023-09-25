import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import * as bcrypt from 'bcrypt'; 
@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}
  async create(registerDto: RegisterDto) {
    // Hashea la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    
    // Crea un nuevo usuario con la contraseña hasheada
    const newUser = this.studentRepository.create({
      ...registerDto,
      password: hashedPassword,
    });

    // Guarda el usuario en la base de datos
    return await this.studentRepository.save(newUser);
  }

  async findAll() {
    return await this.studentRepository.find();
  }
  async findByUsername(username: string) {
    return await this.studentRepository.findOne({ where: { username } });
  }

}
