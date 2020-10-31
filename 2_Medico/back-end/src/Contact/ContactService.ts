import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './Contact';

@Injectable()
export class ContactService {
  constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>) {}

  async index(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }

  async show(id: number): Promise<Contact> {
    return await this.contactRepository.findOne({ idContact: id });
  }

  async store(data: Contact): Promise<Contact> {
    const contact: Contact = this.contactRepository.create(data);
    return contact;
  }

  async update(id: number, data: Contact): Promise<Contact> {
    await this.contactRepository.update({ idContact: id }, data);
    return this.show(id);
  }

  async delete(id: number) {
    const contact = await this.contactRepository.find({ idContact: id });
    await this.contactRepository.remove(contact);
  }
}
