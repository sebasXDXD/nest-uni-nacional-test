import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { StudentsService } from 'src/students/students.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt'; 
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly studentsService:StudentsService,
        private readonly jwtService :JwtService
    ){

    }
    async register(registerDto:RegisterDto){
        const  user = await this.studentsService.findByUsername(registerDto.username);
        if (user) {
           throw new BadRequestException("EL estudiante ya existe");
        }
        return await this.studentsService.create(registerDto);
    }
    async login(loginDto:LoginDto){
        const  student = await this.studentsService.findByUsername(loginDto.username);
        if (!student) {
           throw new UnauthorizedException("EL usuario no existe");
        }
        const isValidPassword = await bcrypt.compare(loginDto.password,  student.password)
        if (!isValidPassword) {
            throw new UnauthorizedException("Password incorrecta");
         }

         const payload = {username:student.username,studentId: student.id, };
         const token =await this.jwtService.signAsync(payload);
         return { token, studentId: student.id };
          
    }
}
