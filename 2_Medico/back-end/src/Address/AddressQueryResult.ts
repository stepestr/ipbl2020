import { ApiProperty } from '@nestjs/swagger';
import { Address } from './Address';

export abstract class AddressQueryResult {
  @ApiProperty()
  page: number;

  @ApiProperty()
  pagesAmmount: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  limit: number;

  @ApiProperty({ type: Address })
  addresses: Address[];
}
