import { Connection } from 'mongoose';
import { SensorSchema } from './SensorSchema';

export const SensorProviders = [
  {
    provide: 'SENSOR_MODEL',
    useFactory: (connection: Connection) => connection.model('Sensor', SensorSchema),
    inject: ['MONGODB_CONNECTION'],
  },
];
