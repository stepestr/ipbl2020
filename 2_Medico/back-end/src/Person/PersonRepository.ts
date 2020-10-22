import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './Person';

@Injectable()
export class PersonRepository {
  constructor(
    @InjectRepository(Person) private repository: Repository<Person>,
  ) {}

  async getAll(): Promise<Person[]> {
    return await this.repository.find();
  }

  async getById(id: number): Promise<Person> {
    return await this.repository.findOne({ where: { id } });
  }

  async newAddress(data: Person): Promise<Person> {
    const person: Person = this.repository.create(data);
    await this.repository.save(person);
    return person;
  }
}