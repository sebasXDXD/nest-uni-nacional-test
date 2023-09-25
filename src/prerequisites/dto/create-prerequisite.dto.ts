import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePrerequisiteDto {
  @IsNumber()
  main_subject_id: number;

  @IsNumber()
  required_subject_id: number;

  @IsOptional()
  @IsString()
  additional_note?: string | null;
}
