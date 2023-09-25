import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly autService;
    constructor(autService: AuthService);
    register(registerDto: RegisterDto): Promise<import("../students/entities/student.entity").Student>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        studentId: number;
    }>;
}
