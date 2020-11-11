import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class Sensor extends Document {
  @ApiProperty()
  idHospital: number;

  @ApiProperty()
  dateTime: Date;

  @ApiProperty()
  inclination: number;

  @ApiProperty()
  velocity: number;

  @ApiProperty()
  temperature: number;

  @ApiProperty()
  movement: number;

  @ApiProperty()
  saturation: number;

  @ApiProperty()
  fall: boolean;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  frequency: number;

  @ApiProperty()
  obstacle: boolean;
}
