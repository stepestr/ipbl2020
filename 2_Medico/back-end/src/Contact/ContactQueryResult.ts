import { ApiProperty } from '@nestjs/swagger';
import { Contact } from './Contact';

export abstract class ContactQueryResult {
  @ApiProperty()
  page: number;

  @ApiProperty()
  pagesAmmount: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  limit: number;

  @ApiProperty({ type: Contact })
  contacts: Contact[];
}
