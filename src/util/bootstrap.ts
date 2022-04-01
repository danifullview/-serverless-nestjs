import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const enableSwagger = (app: INestApplication, server?: string) => {
  const builder = new DocumentBuilder()
    .setTitle('NestJS on serverless')
    .setDescription('NestJS on serverless API description')
    .setVersion('1.0');

  if (server) {
    builder.addServer(server);
  }

  const options = builder.build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
};
