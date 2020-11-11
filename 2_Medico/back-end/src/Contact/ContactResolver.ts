import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Contact } from './Contact';
import { ContactRepository } from './ContactRepository';

@Resolver(of => Contact)
export class ContactResolver {
  constructor(private contactRepository: ContactRepository) {}

  @Query(returns => Contact, { name: 'contacts' })
  async getContacts() {
    return this.contactRepository.getAll();
  }

  @Query(returns => Contact, { name: 'contact' })
  async author(@Args('idContact', { type: () => Int }) id: number) {
    return this.contactRepository.show(id);
  }
}
