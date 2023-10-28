import { Controller, Get, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('api/webhook/')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) { }
  

  @Post('generate')
  generate() {
    return this.webhookService.generate()
  }

  // TODO: protect this controller by bearer token
  @Get()
  findAll() {
    return this.webhookService.findAll();
  }

}
