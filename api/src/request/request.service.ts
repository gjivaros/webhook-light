import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestEntity } from './request.entity';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(RequestEntity)
    private readonly requestRepo: Repository<RequestEntity>
  ) { }
  
  create(id: string, body: any) {
    return this.requestRepo.save({
      webhookId: id,
      payload: {
        data: body
      }
    })
  }

  findByWebhookId(webhookId: string) {
    return this.requestRepo.find({ where:{webhookId }})
  }
}
