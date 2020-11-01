import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Employee } from './Employee';
import { EmployeeQuery } from './EmployeeQuery';
import { EmployeeService } from './EmployeeService';
import { EmployeesQueryResult } from './EmployeesQueryResult';

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  async index(@Query(ValidationPipe) queryParams: EmployeeQuery): Promise<EmployeesQueryResult> {
    return await this.employeeService.index(queryParams);
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<Employee> {
    return await this.employeeService.show(id);
  }

  @Post()
  async store(@Body(ValidationPipe) data: Employee): Promise<Employee> {
    return await this.employeeService.store(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) data: Employee): Promise<Employee> {
    return await this.employeeService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.employeeService.delete(id);
  }
}
