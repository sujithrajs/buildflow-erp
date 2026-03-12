import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { AppModule } from '../src/app.module';

const server = express();

let app: any;

const bootstrap = async () => {
  if (!app) {
    app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
      logger: ['error', 'warn'],
    });
    app.enableCors({ origin: true, credentials: true });
    await app.init();
  }
  return server;
};

// Initialize on first load (warm up)
bootstrap();

export default async (req: any, res: any) => {
  await bootstrap();
  server(req, res);
};
