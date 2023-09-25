import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { SubjectsModule } from './subjects/subjects.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { PrerequisitesModule } from './prerequisites/prerequisites.module';
import { AuthModule } from './auth/auth.module';
import { Subject } from './subjects/entities/subject.entity';
import { Student } from './students/entities/student.entity';
import { Enrollment } from './enrollments/entities/enrollment.entity';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost', 
      port: 5432, 
      username: 'sebas_cruds', 
      password: 'root', 
      database: 'uni_nacional_db',
      autoLoadEntities:true,
      entities: [Student, Subject, Enrollment],
      synchronize: true, 
    }),
    StudentsModule,
    SubjectsModule,
    EnrollmentsModule,
    PrerequisitesModule,
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}
