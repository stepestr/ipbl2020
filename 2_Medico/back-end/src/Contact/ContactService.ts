import { ContactRepository } from './ContactRepository';

export class ContactService {
  constructor(private addressRepository: ContactRepository) {}
}
