import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Employee } from './Employee';
import { EmployeeQuery } from './EmployeeQuery';
import { EmployeeQueryResult } from './EmployeeQueryResult';
import { EmployeeService } from './EmployeeService';

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @ApiOkResponse({
    description: "Employees's Listing",
    type: EmployeeQueryResult,
  })
  @Get()
  async index(@Query(ValidationPipe) queryParams: EmployeeQuery): Promise<EmployeeQueryResult> {
    return await this.employeeService.index(queryParams);
  }

  @ApiOkResponse({
    description: "Employee's Details",
    type: Employee,
  })
  @Get(':id')
  async show(@Param('id') id: number): Promise<Employee> {
    return await this.employeeService.show(id);
  }

  @ApiCreatedResponse({
    description: 'Employee created',
    type: Employee,
  })
  @Post()
  async store(@Body(ValidationPipe) data: Employee): Promise<Employee> {
    return await this.employeeService.store(data);
  }

  @ApiOkResponse({
    description: 'Employee updated',
    type: Employee,
  })
  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) data: Employee): Promise<Employee> {
    return await this.employeeService.update(id, data);
  }

  @ApiOkResponse({
    description: 'Employee deleted',
  })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.employeeService.delete(id);
  }
}
