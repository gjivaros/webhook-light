import { RequestEntity } from "src/request/request.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Webhook")
export class WebhookEntity {
  
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @CreateDateColumn({ nullable: false })
  createdAt!: string

  @Column({ type: 'integer', nullable: true })
  userId?: number

  @ManyToOne(() => UserEntity, (user) => user.webhooks)
  @JoinColumn(
    {
      name: 'userId'
    }
  )
  user?: UserEntity
  
  @OneToMany(() => RequestEntity, (req) => req.webhook)
  requests?:RequestEntity[]
 }
