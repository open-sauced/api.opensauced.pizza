import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { fastifyHelmet } from '@fastify/helmet';
import { ConfigService } from '@nestjs/config';
import fastifyRateLimit from '@fastify/rate-limit';

import { AppModule } from './app.module';

// import { name, description, version } from '../package.json';
const name ='api';
const description = 'api'
const version = '1.0'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );
  const configService = app.get(ConfigService);

  const options = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string,
    ) => methodKey,
  });
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
  };
  SwaggerModule.setup('docs', app, document, customOptions);
  app.enableCors();
  await app.register(fastifyHelmet, {
    contentSecurityPolicy: false,
  });
  await app.register(fastifyRateLimit, {
    max: 100,
    timeWindow: '1 minute',
  });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(configService.get('api.port'), configService.get('api.host'));
}

bootstrap();

