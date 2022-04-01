import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { enableSwagger } from './util/bootstrap';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  enableSwagger(app);

  await app.listen(3000);
}
bootstrap();
