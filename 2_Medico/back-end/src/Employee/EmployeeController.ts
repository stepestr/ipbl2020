import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { EmployeeService } from './EmployeeService';

@Controller()
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getEmployee() {}

  @Get(':id')
  async getEmployeeById() {}

  @Post()
  async newEmployee() {}

  @Put(':id')
  async updateEmployee() {}

  @Delete(':id')
  async deleteEmployee() {}
}