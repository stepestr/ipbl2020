import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { HospitalService } from './HospitalService';

@Controller()
export class HostipalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Get()
  async getHostipal() {}

  @Get(':id')
  async getHostipalById() {}

  @Post()
  async newHostipal() {}

  @Put(':id')
  async updateHostipal() {}

  @Delete(':id')
  async deleteHostipal() {}
}