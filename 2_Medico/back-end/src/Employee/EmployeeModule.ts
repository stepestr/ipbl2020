import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/DatabaseModule';
import { Employee } from './Employee';
import { EmployeeController } from './EmployeeController';
import { EmployeeProviders } from './EmployeeProviders';
import { EmployeeRepository } from './EmployeeRepository';
import { EmployeeService } from './EmployeeService';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeController],
  providers: [EmployeeService, ...EmployeeProviders, EmployeeRepository],
})
export class EmployeeModule {}
