import { WebhookEntity } from "src/webhook/webhook.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity(
  'Request', {
  orderBy: {
    createdAt: 'DESC'
  }
})
export class RequestEntity {

  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'json', nullable: true })
  payload!: Record<'data', any>

  @CreateDateColumn({ nullable: false })
  createdAt!: string


  @Column({ type: 'varchar', nullable: false })
  webhookId!: string
  
  @ManyToOne(() => WebhookEntity, (wh) => wh.requests)
  @JoinColumn(
    {
    name: 'webhookId'
    }
  )
  webhook?:WebhookEntity
}
