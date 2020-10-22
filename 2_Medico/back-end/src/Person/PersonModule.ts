import { Module } from '@nestjs/common';
import { Person } from './Person';
import { PersonController } from './PersonController';
import { PersonRepository } from './PersonRepository';
import { PersonService } from './PersonService';
@Module({
  controllers: [PersonController],
  providers: [PersonService, PersonRepository],
  exports: [PersonService],
})
export class PersonModule {}
