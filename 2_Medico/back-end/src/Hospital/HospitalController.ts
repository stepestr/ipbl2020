import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { Hospital } from './Hospital';
import { HospitalQuery } from './HospitalQuery';
import { HospitalQueryResult } from './HospitalQueryResult';
import { HospitalService } from './HospitalService';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Hospital')
@Controller('hospital')
export class HospitalController {
  constructor(private hospitalService: HospitalService) {}

  @ApiOkResponse({
    description: "Hospital's Listing",
    type: HospitalQueryResult,
  })
  @Get()
  async index(@Query(ValidationPipe) queryParams: HospitalQuery): Promise<HospitalQueryResult> {
    return await this.hospitalService.index(queryParams);
  }

  @ApiOkResponse({
    description: "Hospital Details",
    type: Hospital,
  })
  @Get(':id')
  async show(@Param('id') id: number): Promise<Hospital> {
    return await this.hospitalService.show(id);
  }

  @ApiCreatedResponse({
    description: 'Hospital created',
    type: Hospital,
  })
  @Post()
  async store(@Body(ValidationPipe) data: Hospital): Promise<Hospital> {
    return await this.hospitalService.store(data);
  }

  @ApiOkResponse({
    description: 'Hospital Updated',
    type: Hospital,
  })
  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) data: Hospital): Promise<Hospital> {
    return await this.hospitalService.update(id, data);
  }

  @ApiOkResponse({
    description: "Hospital Deleted"
  })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.hospitalService.delete(id);
  }
}
