import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { EmergencyScope } from './EmergencyScope';

export abstract class EmergencyQuery {
  @ApiProperty()
  @IsOptional()
  @Transform(x => Number(x))
  @IsInt()
  limit: number;

  @ApiProperty({ enum: EmergencyScope })
  @IsOptional()
  @IsEnum(EmergencyScope)
  orderBy: EmergencyScope;

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
