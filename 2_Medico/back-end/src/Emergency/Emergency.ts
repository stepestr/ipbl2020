import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export interface Emergency extends Document {
  //@ApiProperty()
  idHospital: number;

  //@ApiProperty()
  dateTime: Date;

  //@ApiProperty()
  serialNumber: number;

  //@ApiProperty()
  message: string;

  //@ApiProperty()
  auto: boolean;

  //@ApiProperty()
  sensor: string;
}
