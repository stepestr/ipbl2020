import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Sensor } from './Sensor';
import { SensorQuery } from './SensorQuery';
import { SensorQueryResult } from './SensorQueryResult';
import { SensorService } from './SensorService';

@ApiTags('Sensor')
@Controller('sensor')
export class SensorController {
  constructor(private sensorService: SensorService) {}

  @ApiOkResponse({
    description: "Sensors's Listing",
    type: SensorQueryResult,
  })
  @Get()
  async index(@Query(ValidationPipe) queryParams: SensorQuery) {
    return await this.sensorService.index(queryParams);
  }

  @ApiOkResponse({
    description: 'Sensor Detail',
    type: Sensor,
  })
  @Get(':id')
  async show(@Param('id') id: string): Promise<Sensor> {
    return await this.sensorService.show(id);
  }

  @ApiCreatedResponse({
    description: 'Sensor created',
    type: Sensor,
  })
  @Post()
  async store(@Body(ValidationPipe) data: Sensor): Promise<Sensor> {
    return await this.sensorService.store(data);
  }

  @ApiOkResponse({
    description: 'Sensor Updated',
    type: Sensor,
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body(ValidationPipe) data: Sensor): Promise<Sensor> {
    return await this.sensorService.update(id, data);
  }

  @ApiOkResponse({
    description: 'Sensor deleted',
  })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.sensorService.delete(id);
  }
}
