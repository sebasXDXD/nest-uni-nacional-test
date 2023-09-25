import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PrerequisitesService } from './prerequisites.service';
import { CreatePrerequisiteDto } from './dto/create-prerequisite.dto';
import { UpdatePrerequisiteDto } from './dto/update-prerequisite.dto';
import { AuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('prerequisites')
export class PrerequisitesController {
  constructor(private readonly prerequisitesService: PrerequisitesService) {}
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createPrerequisiteDto: CreatePrerequisiteDto) {
    return this.prerequisitesService.create(createPrerequisiteDto);
  }

  @Get()
  findAll() {
    return this.prerequisitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prerequisitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrerequisiteDto: UpdatePrerequisiteDto) {
    return this.prerequisitesService.update(+id, updatePrerequisiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prerequisitesService.remove(+id);
  }
}
