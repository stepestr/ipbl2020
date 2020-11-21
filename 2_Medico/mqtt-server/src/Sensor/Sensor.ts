import { Document } from 'mongoose';

export class Sensor extends Document {
  idHospital: number;
  dateTime: Date;
  inclination: number;
  velocity: number;
  temperature: number;
  movement: number;
  saturation: number;
  fall: boolean;
  latitude: number;
  longitude: number;
  frequency: number;
  obstacle: boolean;
}
