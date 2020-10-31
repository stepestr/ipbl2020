import { Module } from '@nestjs/common';
import { PersonController } from './PersonController';
import { PersonService } from './PersonService';

@Module({
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
