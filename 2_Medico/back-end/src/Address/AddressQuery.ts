import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { AddressScope } from './AddressScope';

export abstract class AddressQuery {
  @IsOptional()
  @Transform(x => Number(x))
  @IsInt()
  limit: number;

  @IsOptional()
  @IsEnum(AddressScope)
  orderBy: AddressScope;

  @IsOptional()
  @Transform(item => item.toUpperCase())
  @IsEnum({ ASC: 'ASC', DESC: 'DESC' })
  order: 'ASC' | 'DESC' = 'ASC';

  @IsOptional()
  @Transform(item => Number(item))
  @IsInt()
  page: number;
}
