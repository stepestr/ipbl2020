import { Employee } from './Employee';

export abstract class EmployeesQueryResult {
  page: number;
  pagesAmmount: number;
  count: number;
  limit: number;
  employees: Employee[];
}
