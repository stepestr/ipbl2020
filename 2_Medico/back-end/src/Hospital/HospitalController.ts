import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { HospitalService } from './HospitalService';

@Controller('hospital')
export class HospitalController {
  constructor(private hospitalService: HospitalService) {}

  @Get()
  async index() {
    return await this.hospitalService.index();
  }

  @Get(':id')
  async show() {
    return await this.hospitalService.show();
  }

  @Post()
  async store() {
    return await this.hospitalService.store();
  }

  @Put(':id')
  async update() {
    return await this.hospitalService.update();
  }

  @Delete(':id')
  async delete() {
    return await this.hospitalService.delete();
  }
}
