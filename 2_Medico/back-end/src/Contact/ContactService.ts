import { Injectable } from '@nestjs/common';
import { Contact } from './Contact';
import { ContactQuery } from './ContactQuery';
import { ContactQueryResult } from './ContactQueryResult';
import { ContactRepository } from './ContactRepository';

@Injectable()
export class ContactService {
  constructor(private contactRepository: ContactRepository) {}

  async index(queryParams: ContactQuery): Promise<ContactQueryResult> {
    return await this.contactRepository.index(queryParams);
  }

  async show(id: number): Promise<Contact> {
    return await this.contactRepository.show(id);
  }

  async store(data: Contact): Promise<Contact> {
    return await this.contactRepository.store(data);
  }

  async update(id: number, data: Contact): Promise<Contact> {
    return await this.contactRepository.update(id, data);
  }

  async delete(id: number) {
    return await this.contactRepository.delete(id);
  }
}
