import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Person } from './Person';
import { PersonQuery } from './PersonQuery';
import { PersonQueryResult } from './PersonQueryResult';
import { PersonService } from './PersonService';

@ApiTags('Person')
@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @ApiOkResponse({
    description: "Person's Listing",
    type: PersonQueryResult,
  })
  @Get()
  async index(@Query(ValidationPipe) queryParams: PersonQuery): Promise<PersonQueryResult> {
    return await this.personService.index(queryParams);
  }

  @ApiOkResponse({
    description: "Person Details",
    type: Person,
  })
  @Get(':id')
  async show(@Param('id') id: number): Promise<Person> {
    return await this.personService.show(id);
  }

  @ApiCreatedResponse({
    description: 'Person Created',
    type: Person,
  })
  @Post()
  async store(@Body(ValidationPipe) data: Person): Promise<Person> {
    return await this.personService.store(data);
  }

  @ApiOkResponse({
    description: 'Person Updated',
    type: Person,
  })
  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) data: Person): Promise<Person> {
    return await this.personService.update(id, data);
  }

  @ApiOkResponse({
    description: "Person Deleted"
  })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.personService.delete(id);
  }
}
