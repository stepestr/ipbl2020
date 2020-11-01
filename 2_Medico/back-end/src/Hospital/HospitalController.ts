import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Hospital } from './Hospital';
import { HospitalQuery } from './HospitalQuery';
import { HospitalQueryResult } from './HospitalQueryResult';
import { HospitalService } from './HospitalService';

@ApiTags('Hospital')
@Controller('hospital')
export class HospitalController {
  constructor(private hospitalService: HospitalService) {}

  @Get()
  async index(@Query(ValidationPipe) queryParams: HospitalQuery): Promise<HospitalQueryResult> {
    return await this.hospitalService.index(queryParams);
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<Hospital> {
    return await this.hospitalService.show(id);
  }

  @Post()
  async store(@Body(ValidationPipe) data: Hospital): Promise<Hospital> {
    return await this.hospitalService.store(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) data: Hospital): Promise<Hospital> {
    return await this.hospitalService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.hospitalService.delete(id);
  }
}
