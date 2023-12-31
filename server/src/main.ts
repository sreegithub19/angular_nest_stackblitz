import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // Change the URL prefix to `/api` on backend
  app.setGlobalPrefix('api');

  // Build the OpenAPI document (published under `/api/docs`) with Swagger
  const doc_options = new DocumentBuilder().setTitle(`API Document`).build();
  const doc = SwaggerModule.createDocument(app, doc_options);
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    // Enable Swagger UI for development env
    SwaggerModule.setup('api/docs', app, doc);
  }

  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };

  app.enableCors(options);

  // Start the server
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
