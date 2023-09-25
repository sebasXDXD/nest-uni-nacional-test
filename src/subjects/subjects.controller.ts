import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { AuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectsService.create(createSubjectDto);
  }
  @Get('approved')
  @UseGuards(AuthGuard)
  findSubjectsApprove(  @Req() request) {
    const id = request.student.studentId;
    return this.subjectsService.findApprove(+id);
  }
  @Get('reprobate')
  @UseGuards(AuthGuard)
  findSubjectsReprobate(  @Req() request) {
    const id = request.student.studentId;
    return this.subjectsService.findReprobate(+id);
  }


  @Get() 
  @UseGuards(AuthGuard)
  findAllByStudent(@Req() request) {
    const studentId = request.student.studentId;
    return this.subjectsService.findAllByStudent(studentId);
  }

  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectsService.update(+id, updateSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectsService.remove(+id);
  }
}
