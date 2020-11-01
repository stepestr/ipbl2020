import { Address } from './Address';

export abstract class AddressQueryResult {
  page: number;
  pagesAmmount: number;
  count: number;
  limit: number;
  addresses: Address[];
}
