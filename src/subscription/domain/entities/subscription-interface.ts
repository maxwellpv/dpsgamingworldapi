import { Subscription } from './subscription.entity';

export interface SubscriptionsInterfaceService {
  findAll(): Promise<Subscription[]>;
  findOne(id: string): Promise<Subscription>;
  createSubscription(subscription: Subscription): Promise<Subscription>;
  updateSubscription(
    id: string,
    subscription: Subscription,
  ): Promise<Subscription>;
}
