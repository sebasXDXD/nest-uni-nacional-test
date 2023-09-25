import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { StudentsModule } from 'src/students/students.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants/jwt.constants';

@Module({
  imports: [
    StudentsModule,
    JwtModule.register({
      secret: jwtConstants.secret, // Reemplaza con tu secreto real
      signOptions: { expiresIn: '1h' }, // Configura las opciones según tus necesidades
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
