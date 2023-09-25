import { Transform } from "class-transformer";
import {  IsDefined, IsString, MinLength } from "class-validator";

export class LoginDto {
    @IsDefined()
    @IsString()
    username:string;
    @Transform(({value})=>value.trim())
    @IsString()
    @MinLength(5)
    password:string;
}