import { Hospital } from './Hospital';

export abstract class HospitalQueryResult {
  page: number;
  pagesAmmount: number;
  count: number;
  limit: number;
  hospitals: Hospital[];
}
