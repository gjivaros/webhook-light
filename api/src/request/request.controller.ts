import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { appLog } from 'context';
import { RequestService } from './request.service';

@Controller()
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post(':webhookId')
  @HttpCode(200)
  async call(
    @Param('webhookId')
    webhookId: string,

    @Body()
    body?: any
  ) {
    try {
      await this.requestService.create(webhookId, body);
    } catch (error) {
      appLog.error(error)
    }

    return 'OK'
  }

  @Get(':webhookId')
  requests(
    @Param('webhookId')
    webhookId: string,
  ) {
    return this.requestService.findByWebhookId(webhookId)
  }

}
