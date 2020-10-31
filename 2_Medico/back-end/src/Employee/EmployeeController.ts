import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { EmployeeService } from './EmployeeService';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  async index() {
    return await this.employeeService.index();
  }

  @Get(':id')
  async show() {
    return await this.employeeService.show();
  }

  @Post()
  async store() {
    return await this.employeeService.store();
  }

  @Put(':id')
  async update() {
    return await this.employeeService.update();
  }

  @Delete(':id')
  async delete() {
    return await this.employeeService.delete();
  }
}
