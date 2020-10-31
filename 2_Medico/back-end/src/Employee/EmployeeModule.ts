import { Module } from '@nestjs/common';
import { EmployeeController } from './EmployeeController';
import { EmployeeService } from './EmployeeService';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
