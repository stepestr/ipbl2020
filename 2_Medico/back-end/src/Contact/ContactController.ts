import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { Contact } from './Contact';
import { ContactService } from './ContactService';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  async index(): Promise<Contact[]> {
    return await this.contactService.index();
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
