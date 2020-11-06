import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { DatabaseService } from '../../src/Database/RelationalService';

describe('EmployeeController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, DatabaseService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('(GET) /employee', () => {
    it('should return 200 without query params', () => {
      return request(app.getHttpServer())
        .get('/employee')
        .expect(200);
    });
    it('should return 400 with invalid query params', () => {
      return request(app.getHttpServer())
        .get('/employee')
        .expect(400);
    });
    it('should return 200 with valid query params', () => {
      return request(app.getHttpServer())
        .get('/employee')
        .expect(200);
    });
  });
});
