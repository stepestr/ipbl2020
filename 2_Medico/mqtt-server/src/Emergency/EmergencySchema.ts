import * as mongoose from 'mongoose';

export const EmergencySchema = new mongoose.Schema({
  idHospital: Number,
  dateTime: Date,
  serialNumber: Number,
  message: String,
  auto: Boolean,
  sensor: String,
});
