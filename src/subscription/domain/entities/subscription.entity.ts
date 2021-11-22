import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subscriptions')
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: null })
  subscriptionType: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  end_date: number;
  @Column({ default: null })
  participantLimit: number;
  @Column({ default: null })
  prize_pool: number;
  @Column({ default: null })
  cost: number;
  @Column({ default: null })
  end_Date: string;
  @Column({ default: null })
  amountPaid: number;
  @Column({ default: null })
  active: boolean;
  @Column({ default: null })
  payment_gateway_Id: number;
  @Column({ default: null })
  payment_Id: number;
  @Column({ default: null })
  membership_Id: number;
  @Column()
  userId: number;
}
