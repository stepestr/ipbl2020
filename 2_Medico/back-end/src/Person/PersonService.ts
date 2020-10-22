import { PersonRepository } from './PersonRepository';

export class PersonService {
  constructor(private personRepository: PersonRepository) {}
}