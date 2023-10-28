import { WebhookEntity } from "src/webhook/webhook.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class UserEntity { 

  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: 'varchar', nullable: false })
  email!: string
  
  @Column({ type: 'varchar', nullable: true })
  password?: string

  @CreateDateColumn({ nullable: false })
  createdAt!: string

  @OneToMany(()=>WebhookEntity, (webhook)=>webhook.user)
  webhooks?: WebhookEntity[]
}
