import { Transform } from "class-transformer";
import { IsDate, IsDefined, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegisterDto {

 @IsNotEmpty()
  @IsString()
  readonly first_name: string;

  @IsNotEmpty()
  @IsString()
  readonly last_name: string;

  @IsOptional()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  date_of_birth?: Date;

  @IsString()
  readonly identification_number: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @Transform(({ value }) => value.trim())
  readonly password: string; 

  @IsDefined()
  @IsString()
  @Transform(({ value }) => value.trim())
  readonly username: string; 
}