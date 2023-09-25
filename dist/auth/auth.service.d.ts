import { StudentsService } from 'src/students/students.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly studentsService;
    private readonly jwtService;
    constructor(studentsService: StudentsService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<import("../students/entities/student.entity").Student>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        studentId: number;
    }>;
}
