import { Person } from './Person';

export abstract class PersonQueryResult {
  page: number;
  pagesAmmount: number;
  count: number;
  limit: number;
  persons: Person[];
}
