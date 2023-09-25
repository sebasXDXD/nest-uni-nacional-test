import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { RegisterDto } from './dto/register.student.dto';
import { AuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  // Ruta POST para crear un estudiante
  @Post()
  async create(@Body() registerStudentDto: RegisterDto) {
    return this.studentsService.create(registerStudentDto);
  }

  // Ruta GET para obtener todos los estudiantes
  
  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.studentsService.findAll();
  }

}
