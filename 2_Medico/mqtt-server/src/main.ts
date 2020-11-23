import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MqttModule } from './Mqtt/MqttModule';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MqttModule,
    {
      transport: Transport.MQTT,
      options: {
        url: process.env.MQTT_URL,
      },
    },
  );
  await app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
