import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { HospitalScope } from './HospitalScope';

export abstract class HospitalQuery {
  @IsOptional()
  @Transform(x => Number(x))
  @IsInt()
  limit: number;

  @IsOptional()
  @IsEnum(HospitalScope)
  orderBy: HospitalScope;

  @IsOptional()
  @Transform(item => item.toUpperCase())
  @IsEnum({ ASC: 'ASC', DESC: 'DESC' })
  order: 'ASC' | 'DESC' = 'ASC';

  @IsOptional()
  @Transform(item => Number(item))
  @IsInt()
  page: number;
}
