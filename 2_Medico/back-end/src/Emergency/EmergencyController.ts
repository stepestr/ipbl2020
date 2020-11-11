import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EmergencyService } from './EmergencyService';
import { Emergency } from './Emergency';
import { EmergencyQueryResult } from './EmergencyQueryResult';

@ApiTags('Emergency')
@Controller('emergency')
export class EmergencyController {
  constructor(private emergencyService: EmergencyService) {}

  @ApiOkResponse({
    description: "Emergencies's Listing",
    type: EmergencyQueryResult,
  })
  @Get()
  async index() {
    return await this.emergencyService.index();
  }

  @ApiOkResponse({
    description: 'Emergency Detail',
  })
  @Get(':id')
  async show(@Param('id') id: string): Promise<Emergency> {
    return await this.emergencyService.show(id);
  }

  @ApiCreatedResponse({
    description: 'Emergency created',
  })
  @Post()
  async store(@Body() data: Emergency): Promise<Emergency> {
    return await this.emergencyService.store(data);
  }

  @ApiOkResponse({
    description: 'Emergency Updated',
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body(ValidationPipe) data: Emergency): Promise<Emergency> {
    return await this.emergencyService.update(id, data);
  }

  @ApiOkResponse({
    description: 'Emergency deleted',
  })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.emergencyService.delete(id);
  }
}
