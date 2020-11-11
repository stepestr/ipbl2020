import { ApiProperty } from '@nestjs/swagger';
import { Emergency } from './Emergency';

export abstract class EmergencyQueryResult {
  @ApiProperty()
  page: number;

  @ApiProperty()
  pagesAmmount: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  emergencies: Emergency[];
}
