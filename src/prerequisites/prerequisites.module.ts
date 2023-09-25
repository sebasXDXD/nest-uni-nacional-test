import { Module } from '@nestjs/common';
import { PrerequisitesService } from './prerequisites.service';
import { PrerequisitesController } from './prerequisites.controller';
import { Prerequisite } from './entities/prerequisite.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Prerequisite]), // Importa la entidad Subject aquí
  ],
  controllers: [PrerequisitesController],
  providers: [PrerequisitesService,AuthGuard,JwtService],
})
export class PrerequisitesModule {}
