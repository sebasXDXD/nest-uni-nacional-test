import { Transform } from 'class-transformer';
import { IsInt, IsDate, IsOptional, IsDefined } from 'class-validator';

export class CreateEnrollmentDto {

  @IsDefined()
  @IsInt()
  subject_id: number;

  @IsOptional()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  enrollment_date: Date;
}
