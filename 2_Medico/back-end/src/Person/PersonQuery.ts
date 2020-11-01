import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { PersonScope } from './PersonScope';

export abstract class PersonQuery {
  @IsOptional()
  @Transform(x => Number(x))
  @IsInt()
  limit: number;

  @IsOptional()
  @IsEnum(PersonScope)
  orderBy: PersonScope;

  @IsOptional()
  @Transform(item => item.toUpperCase())
  @IsEnum({ ASC: 'ASC', DESC: 'DESC' })
  order: 'ASC' | 'DESC' = 'ASC';

  @IsOptional()
  @Transform(item => Number(item))
  @IsInt()
  page: number;
}
