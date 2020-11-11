import { Test, TestingModule } from '@nestjs/testing';
import { SensorService } from '../../src/Sensor/SensorService';

describe('SensorService', () => {
  let service: SensorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorService],
    }).compile();

    service = module.get<SensorService>(SensorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
