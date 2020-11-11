import { Inject, Injectable } from '@nestjs/common';
import { Contact } from './Contact';
import { Repository } from 'typeorm';
import { ContactQuery } from './ContactQuery';
import { ContactQueryResult } from './ContactQueryResult';

@Injectable()
export class ContactRepository {
  constructor(
    @Inject('CONTACT_REPOSITORY')
    private contactRepository: Repository<Contact>,
  ) {}

  async index(queryParams: ContactQuery): Promise<ContactQueryResult> {
    const limit = queryParams.limit ? Number(queryParams.limit) : 10;
    const page = queryParams.page ? Number(queryParams.page) : 1;
    queryParams.limit ? Number(queryParams.limit) : 10;
    const query = this.contactRepository.createQueryBuilder('contact');
    query.take(limit);
    query.skip((page - 1) * limit);
    queryParams.orderBy &&
      query.orderBy(`contact.${queryParams.orderBy}`, queryParams.order);
    const contacts = await query.getMany();
    const count = await query.getCount();
    const pagesAmmount = Math.ceil(count / queryParams.limit);
    const result: ContactQueryResult = {
      page,
      limit,
      count,
      pagesAmmount,
      contacts,
    };
    return result;
  }

  async show(id: number): Promise<Contact> {
    return await this.contactRepository.findOne({ idContact: id });
  }

  async store(data: Contact): Promise<Contact> {
    const contact: Contact = this.contactRepository.create(data);
    return await this.contactRepository.save(contact);
  }

  async update(id: number, data: Contact): Promise<Contact> {
    await this.contactRepository.update({ idContact: id }, data);
    return this.show(id);
  }

  async delete(id: number) {
    const contact = await this.contactRepository.find({ idContact: id });
    await this.contactRepository.remove(contact);
  }

  async getAll(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }
}
