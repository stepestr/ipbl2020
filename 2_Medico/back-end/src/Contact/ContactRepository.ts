import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './Contact';

@Injectable()
export class ContactRepository {
  constructor(
    @InjectRepository(Contact) private repository: Repository<Contact>,
  ) {}

  async getAll(): Promise<Contact[]> {
    return await this.repository.find();
  }

  async getById(id: number): Promise<Contact> {
    return await this.repository.findOne({ where: { id } });
  }

  async newAddress(data: Contact): Promise<Contact> {
    const contact: Contact = this.repository.create(data);
    await this.repository.save(contact);
    return contact;
  }
}