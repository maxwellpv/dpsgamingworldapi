import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Subscription } from '../domain/entities/subscription.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionRepository: Repository<Subscription>,
  ) {}
  findAll(): Promise<Subscription[]> {
    return this.subscriptionRepository.find();
  }
  findOne(id: string): Promise<Subscription> {
    return this.subscriptionRepository.findOne(id);
  }
  createSubscription(subscription: Subscription): Promise<Subscription> {
    return this.subscriptionRepository.save(subscription);
  }
  async updateSubscription(
    id: string,
    subscription: Subscription,
  ): Promise<Subscription> {
    const todo = await this.subscriptionRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.subscriptionRepository.update(id, subscription);
    return await this.subscriptionRepository.findOne(id);
  }
}
