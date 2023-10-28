import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appConfig, packageDir } from 'context';
import { TypeOrmLogger } from 'share/type-orm-logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestModule } from './request/request.module';
import { UserModule } from './user/user.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: appConfig.database.url,
      synchronize: true,
      entities: [`${packageDir}/dist/**/*.entity.js`],
      logging: true,
      logger: new TypeOrmLogger()
    }),
    UserModule,
    WebhookModule,
    RequestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
