import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentsController],
  providers: [StudentsService,JwtService, AuthGuard],
  exports:[StudentsService]
})
export class StudentsModule {}
