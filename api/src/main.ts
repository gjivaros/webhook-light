import { NestFactory } from '@nestjs/core';
import { appConfig, appLog } from 'context';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(3000, ()=>appLog.debug(`webhook api is running on ${appConfig.thisServer.port}`));
}

bootstrap().catch(appLog.error);
