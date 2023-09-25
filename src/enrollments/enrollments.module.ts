import { Module } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { EnrollmentsController } from './enrollments.controller';
import { AuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { Enrollment } from './entities/enrollment.entity';
import { Student } from 'src/students/entities/student.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prerequisite } from 'src/prerequisites/entities/prerequisite.entity';


@Module({
  imports: [
  TypeOrmModule.forFeature([Enrollment, Student,Subject, Prerequisite]), 
  ],
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService, JwtService,AuthGuard],
  exports:[EnrollmentsService]
})
export class EnrollmentsModule {}
