import * as mongoose from 'mongoose';

export const SensorSchema = new mongoose.Schema({
  idHospital: Number,
  dateTime: Date,
  inclination: Number,
  velocity: Number,
  temperature: Number,
  movement: Number,
  saturation: Number,
  fall: Boolean,
  latitude: Number,
  longitude: Number,
  frequency: Number,
  obstacle: Boolean,
});
