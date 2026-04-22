import { NestFactory } from '@nestjs/core';
import { urlencoded, json } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  app.enableCors({
    origin: '*', // Permitir que el frontend se conecte sin problemas
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  await app.listen(process.env.PORT || 3001, '0.0.0.0');
}
bootstrap();
