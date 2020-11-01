import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { ContactScope } from './ContactScope';

export abstract class ContactQuery {
  @IsOptional()
  @Transform(x => Number(x))
  @IsInt()
  limit: number;

  @IsOptional()
  @IsEnum(ContactScope)
  orderBy: ContactScope;

  @IsOptional()
  @Transform(item => item.toUpperCase())
  @IsEnum({ ASC: 'ASC', DESC: 'DESC' })
  order: 'ASC' | 'DESC' = 'ASC';

  @IsOptional()
  @Transform(item => Number(item))
  @IsInt()
  page: number;
}
