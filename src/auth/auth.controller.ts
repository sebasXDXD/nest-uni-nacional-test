import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly autService:AuthService){}
    @Post('register')
    register(
        @Body()
        registerDto:RegisterDto
    ){  
        return this.autService.register(registerDto)
    }

    
    @Post('login')
    login(@Body()
    loginDto:LoginDto
    ){
        return this.autService.login(loginDto);
    }
}
