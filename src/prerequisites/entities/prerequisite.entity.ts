import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Subject } from 'src/subjects/entities/subject.entity';  // Asegúrate de importar correctamente la entidad Subject

@Entity()
export class Prerequisite {
  @PrimaryGeneratedColumn()
  prerequisite_id: number;

  @ManyToOne(() => Subject, (subject) => subject.prerequisitesForThisSubject, { onDelete: 'CASCADE' })
  main_subject: Subject; // Relación muchos-a-uno con Subject para el tema principal

  @ManyToOne(() => Subject, (subject) => subject.prerequisitesRequiredForThisSubject, { onDelete: 'CASCADE' })
  required_subject: Subject; // Relación muchos-a-uno con Subject para el tema requerido

  @Column({ type: 'text', nullable: true })
  additional_note: string | null;
}
