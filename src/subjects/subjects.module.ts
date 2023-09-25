import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { AuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from 'src/students/students.module';
import { Subject } from './entities/subject.entity';
import { Student } from 'src/students/entities/student.entity';
@Module({
  imports: [
    StudentsModule,
    TypeOrmModule.forFeature([Subject, Student]), // Importa la entidad Subject aquí
  ],
  controllers: [SubjectsController],
  providers: [SubjectsService, JwtService, AuthGuard],
})
export class SubjectsModule {}
