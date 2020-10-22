import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ContactService } from './ContactService';

@Controller()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async getContact() {}

  @Get(':id')
  async getContactById() {}

  @Post()
  async newContact() {}

  @Put(':id')
  async updateContact() {}

  @Delete(':id')
  async deleteContact() {}
}