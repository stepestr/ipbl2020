import { Injectable } from '@nestjs/common';
import { Person } from './Person';
import { PersonQuery } from './PersonQuery';
import { PersonQueryResult } from './PersonQueryResult';
import { PersonRepository } from './PersonRepository';

@Injectable()
export class PersonService {
  constructor(private personRepository: PersonRepository) {}

  async index(queryParams: PersonQuery): Promise<PersonQueryResult> {
    return await this.personRepository.index(queryParams);
  }

  async show(id: number): Promise<Person> {
    return await this.personRepository.show(id);
  }

  async store(data: Person): Promise<Person> {
    return await this.personRepository.store(data);
  }

  async update(id: number, data: Person): Promise<Person> {
    return await this.personRepository.update(id, data);
  }

  async delete(id: number) {
    return await this.personRepository.delete(id);
  }
}
