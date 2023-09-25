import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Put } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { AuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createEnrollmentDto: CreateEnrollmentDto, @Request() req) {
     const id = req.student.studentId;
    return this.enrollmentsService.create(createEnrollmentDto, id);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.enrollmentsService.findAll();
  }

  @Put(':id')
  async updateStatus(@Param('id') id: number, @Body() updateEnrollmentDto: UpdateEnrollmentDto) {
    try {
      const updatedEnrollment = await this.enrollmentsService.updateStatus(id, updateEnrollmentDto);
      return updatedEnrollment;
    } catch (error) {
      // Manejo de errores aquí, por ejemplo, puedes devolver una respuesta de error apropiada
      throw error;
    }
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrollmentsService.remove(+id);
  }
}
