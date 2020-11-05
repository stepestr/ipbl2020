import { ApiProperty } from '@nestjs/swagger';
import { Hospital } from './Hospital';

export abstract class HospitalQueryResult {
  @ApiProperty()
  page: number;

  @ApiProperty()
  pagesAmmount: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  limit: number;

  @ApiProperty({ type: Hospital })
  hospitals: Hospital[];
}
