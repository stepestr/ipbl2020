import { Connection } from 'mongoose';
import { EmergencySchema } from './EmergencySchema';

export const EmergencyProviders = [
  {
    provide: 'EMERGENCY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('emergencies', EmergencySchema),
    inject: ['MONGODB_CONNECTION'],
  },
];
