import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PersonService } from './PersonService';

@Controller()
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async getPerson() {}

  @Get(':id')
  async getPersonById() {}

  @Post()
  async newPerson() {}

  @Put(':id')
  async updatePerson() {}

  @Delete(':id')
  async deletePerson() {}
}