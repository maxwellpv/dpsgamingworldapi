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
  @Column({ default: null })
  end_date: string;
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
