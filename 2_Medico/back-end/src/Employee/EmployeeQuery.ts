import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { EmployeeScope } from './EmployeeScope';

export abstract class EmployeeQuery {
  @IsOptional()
  @Transform(x => Number(x))
  @IsInt()
  limit: number;

  @IsOptional()
  @IsEnum(EmployeeScope)
  orderBy: EmployeeScope;

  @IsOptional()
  @Transform(item => item.toUpperCase())
  @IsEnum({ ASC: 'ASC', DESC: 'DESC' })
  order: 'ASC' | 'DESC' = 'ASC';

  @IsOptional()
  @Transform(item => Number(item))
  @IsInt()
  page: number;
}
