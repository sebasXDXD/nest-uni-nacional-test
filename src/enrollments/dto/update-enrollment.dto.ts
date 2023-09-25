import { PartialType } from '@nestjs/mapped-types';
import { CreateEnrollmentDto } from './create-enrollment.dto';
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateEnrollmentDto extends PartialType(CreateEnrollmentDto) {
  
    @IsNotEmpty()
    @IsDefined()
    @IsNumber()
    score: number;
    
}
