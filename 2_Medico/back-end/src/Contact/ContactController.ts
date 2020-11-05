import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Contact } from './Contact';
import { ContactQuery } from './ContactQuery';
import { ContactQueryResult } from './ContactQueryResult';
import { ContactService } from './ContactService';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @ApiOkResponse({
    description: "Contacts's Listing",
    type: ContactQueryResult,
  })
  @Get()
  async index(@Query(ValidationPipe) queryParams: ContactQuery): Promise<ContactQueryResult> {
    return await this.contactService.index(queryParams);
  }

  @ApiOkResponse({
    description: 'Contacts Detail',
    type: Contact,
  })
  @Get(':id')
  async show(@Param('id') id: number): Promise<Contact> {
    return await this.contactService.show(id);
  }

  @ApiCreatedResponse({
    description: 'Contact created',
    type: Contact,
  })
  @Post()
  async store(@Body(ValidationPipe) data: Contact): Promise<Contact> {
    return await this.contactService.store(data);
  }

  @ApiOkResponse({
    description: 'Contacts Updated',
    type: Contact,
  })
  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) data: Contact): Promise<Contact> {
    return await this.contactService.update(id, data);
  }

  @ApiOkResponse({
    description: 'Contact deleted',
  })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.contactService.delete(id);
  }
}
