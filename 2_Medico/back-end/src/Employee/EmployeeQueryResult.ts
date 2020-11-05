import { ApiProperty } from '@nestjs/swagger';
import { Employee } from './Employee';

export abstract class EmployeeQueryResult {
  @ApiProperty()
  page: number;

  @ApiProperty()
  pagesAmmount: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  limit: number;

  @ApiProperty({ type: Employee })
  employees: Employee[];
}
