import { Document } from 'mongoose';

export interface Emergency extends Document {
  idHospital: number;
  dateTime: Date;
  serialNumber: number;
  message: string;
  auto: boolean;
  sensor: string;
}
