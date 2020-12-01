import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Person } from './Person';
import { PersonService } from './PersonService';

@ApiTags('QRCode')
@Controller('qrcode')
export class QRCodeController {
  constructor(private personService: PersonService) {}

  @ApiOkResponse({
    description: 'Person QRCode',
    type: Person,
  })
  @Get(':id')
  async show(@Param('id') id: number): Promise<Person> {
    return await this.personService.show(id);
  }
}
