import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Subject } from 'src/subjects/entities/subject.entity';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.enrollments)
  student: Student; // Relación muchos-a-uno con Student

  @ManyToOne(() => Subject, (subject) => subject.enrollments)
  subject: Subject; // Relación muchos-a-uno con Subject

  @Column({ type: 'date' })
  enrollment_date: Date;

  @Column({ type: 'varchar', length: 20, default: 'inscrito' }) // Agrega el campo de estado con valor por defecto "inscrito"
  status: string;
  
  @Column({ type: 'numeric', precision: 5, scale: 2, nullable: true })
  score: number | null;
  
}
