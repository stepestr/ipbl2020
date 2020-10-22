import { Module } from '@nestjs/common';
import { Employee } from './Employee';
import { EmployeeController } from './EmployeeController';
import { EmployeeRepository } from './EmployeeRepository';
import { EmployeeService } from './EmployeeService';
@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository],
  exports: [EmployeeService],
})
export class EmployeeModule {}
