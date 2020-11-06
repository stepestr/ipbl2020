import { ApiProperty } from '@nestjs/swagger';
import { Sensor } from './Sensor';

export abstract class SensorQueryResult {
  @ApiProperty()
  page: number;

  @ApiProperty()
  pagesAmmount: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  limit: number;

  @ApiProperty({ type: Sensor })
  sensors: Sensor[];
}
