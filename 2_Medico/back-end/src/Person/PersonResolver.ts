import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Person } from './Person';
import { PersonRepository } from './PersonRepository';

@Resolver(of => Person)
export class PersonResolver {
  constructor(private personRepository: PersonRepository) {}

  @Query(returns => Person, { name: 'persons' })
  async getContacts() {
    return this.personRepository.getAll();
  }

  @Query(returns => Person, { name: 'person' })
  async author(@Args('idContact', { type: () => Int }) id: number) {
    return this.personRepository.show(id);
  }
}
