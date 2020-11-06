import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { SensorScope } from './SensorScope';

export abstract class SensorQuery {
  @ApiProperty()
  @IsOptional()
  @Transform(x => Number(x))
  @IsInt()
  limit: number;

  @ApiProperty({ enum: SensorScope })
  @IsOptional()
  @IsEnum(SensorScope)
  orderBy: SensorScope;

  @ApiProperty({ enum: ['ASC', 'DESC'] })
  @IsOptional()
  @Transform(item => item.toUpperCase())
  @IsEnum({ ASC: 'ASC', DESC: 'DESC' })
  order: 'ASC' | 'DESC' = 'ASC';

  @ApiProperty()
  @IsOptional()
  @Transform(item => Number(item))
  @IsInt()
  page: number;
}
