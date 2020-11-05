import { Person } from './Person';
import { ApiProperty } from '@nestjs/swagger';

export abstract class PersonQueryResult {

  @ApiProperty()
  page: number;

  @ApiProperty()
  pagesAmmount: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  limit: number;

  @ApiProperty({ type: Person })
  persons: Person[];
}
