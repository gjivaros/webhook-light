import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookController } from './webhook.controller';
import { WebhookEntity } from './webhook.entity';
import { WebhookService } from './webhook.service';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService],
  imports: [
    TypeOrmModule.forFeature([WebhookEntity])
  ]
})
export class WebhookModule {}
