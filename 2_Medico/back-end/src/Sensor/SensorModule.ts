import { Module } from '@nestjs/common';
import { SensorService } from './SensorService';
import { SensorController } from './SensorController';
import { SensorProviders } from './SensorProviders';
import { SensorRepository } from './SensorRepository';
import { DatabaseModule } from '../Database/DatabaseModule';

@Module({
  imports: [DatabaseModule],
  providers: [SensorService, ...SensorProviders, SensorRepository],
  controllers: [SensorController],
})
export class SensorModule {}
