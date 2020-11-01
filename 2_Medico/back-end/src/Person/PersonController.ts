import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Person } from './Person';
import { PersonQuery } from './PersonQuery';
import { PersonQueryResult } from './PersonQueryResult';
import { PersonService } from './PersonService';

@ApiTags('Person')
@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  async index(@Query(ValidationPipe) queryParams: PersonQuery): Promise<PersonQueryResult> {
    return await this.personService.index(queryParams);
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<Person> {
    return await this.personService.show(id);
  }

  @Post()
  async store(@Body(ValidationPipe) data: Person): Promise<Person> {
    return await this.personService.store(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) data: Person): Promise<Person> {
    return await this.personService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.personService.delete(id);
  }
}
