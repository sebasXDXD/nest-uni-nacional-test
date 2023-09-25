// subject.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Student } from 'src/students/entities/student.entity'; // Asegúrate de importar la entidad correcta para Student
import { Enrollment } from 'src/enrollments/entities/enrollment.entity';
import { Prerequisite } from 'src/prerequisites/entities/prerequisite.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  code: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  professor: string;
  @OneToMany(() => Student, (student) => student.subjects)
  students: Student[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.subject)
  enrollments: Enrollment[];

  @OneToMany(() => Prerequisite, (prerequisite) => prerequisite.main_subject)
  prerequisitesForThisSubject: Prerequisite[];

  @OneToMany(() => Prerequisite, (prerequisite) => prerequisite.required_subject)
  prerequisitesRequiredForThisSubject: Prerequisite[];
}
