import { Module } from '@nestjs/common';
import { SubscriptionsService } from '../services/subscriptions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from '../domain/entities/subscription.entity';
import { SubscriptionsController } from '../controllers/subscriptions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subscription])],
  providers: [SubscriptionsService],
  controllers: [SubscriptionsController],
})
export class SubscriptionsModule {}
