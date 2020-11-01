import { Contact } from './Contact';

export abstract class ContactQueryResult {
  page: number;
  pagesAmmount: number;
  count: number;
  limit: number;
  contacts: Contact[];
}
