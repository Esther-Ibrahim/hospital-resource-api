import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateResourcesDto } from './dto/update-resources.dto';

@Controller('hospitals')
export class HospitalsController {
  constructor(private readonly hospitalsService: HospitalsService) {}

  @Post()
  create(@Body() dto: CreateHospitalDto) {
    return this.hospitalsService.create(dto);
  }

  @Get()
  findAll(
    @Query('state') state?: string,
    @Query('lga') lga?: string,
    @Query('oxygenAvailable') oxygenAvailable?: string,
  ) {
    return this.hospitalsService.findAll({ state, lga, oxygenAvailable });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospitalsService.findOne(id);
  }

  @Patch(':id/resources')
  updateResources(@Param('id') id: string, @Body() dto: UpdateResourcesDto) {
    return this.hospitalsService.updateResources(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.hospitalsService.delete(id);
  }
}
