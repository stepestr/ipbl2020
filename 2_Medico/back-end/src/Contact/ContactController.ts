import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Contact } from './Contact';
import { ContactQuery } from './ContactQuery';
import { ContactQueryResult } from './ContactQueryResult';
import { ContactService } from './ContactService';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  async index(@Query(ValidationPipe) queryParams: ContactQuery): Promise<ContactQueryResult> {
    return await this.contactService.index(queryParams);
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<Contact> {
    return await this.contactService.show(id);
  }

  @Post()
  async store(@Body(ValidationPipe) data: Contact): Promise<Contact> {
    return await this.contactService.store(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) data: Contact): Promise<Contact> {
    return await this.contactService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.contactService.delete(id);
  }
}
