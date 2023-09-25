import { Entity, PrimaryGeneratedColumn, Column, Unique, JoinTable, OneToMany, ManyToOne } from 'typeorm';
import { Subject } from 'src/subjects/entities/subject.entity'; // Asegúrate de importar la entidad correcta para Subject
import { Enrollment } from 'src/enrollments/entities/enrollment.entity';

@Entity('students')
@Unique(["username"]) 
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  last_name: string;

  @Column({ type: 'date', nullable: true })
  date_of_birth: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  identification_number: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  username: string;

  @ManyToOne(() => Subject, (subject) => subject.students)
  @JoinTable()
  subjects: Subject[];
  @OneToMany(() => Enrollment, (enrollment) => enrollment.subject)
  enrollments: Enrollment[]; 
}
