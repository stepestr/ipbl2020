import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PersonService } from './PersonService'

@Controller('person')
export class PersonController {
    constructor(private personService: PersonService ){}

    @Get()
  async index() {
    return await this.personService.index();
  }

  @Get(':id')
  async show() {
    return await this.personService.show();
  }

  @Post()
  async store() {
    return await this.personService.store();
  }

  @Put(':id')
  async update() {
    return await this.personService.update();
  }

  @Delete(':id')
  async delete() {
    return await this.personService.delete();
  }
}
