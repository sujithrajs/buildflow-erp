import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Express, Request, Response } from 'express';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';

const server: Express = express();
let cachedApp: INestApplication | null = null;

async function createApp(): Promise<INestApplication> {
  if (cachedApp) return cachedApp;

  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
    { logger: false },
  );
  app.enableCors({ origin: true, credentials: true });
  await app.init();
  cachedApp = app;
  return app;
}

export default async function handler(req: any, res: any): Promise<void> {
  try {
    await createApp();
    server(req, res);
  } catch (error) {
    console.error('NestJS handler error:', error);
    res.status(500).json({ error: String(error) });
  }
}
