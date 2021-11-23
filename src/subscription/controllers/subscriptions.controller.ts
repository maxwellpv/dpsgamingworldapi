import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { SubscriptionsService } from '../services/subscriptions.service';
import { Subscription } from '../domain/entities/subscription.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('subscriptions')
@Controller('api/v1/subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionService: SubscriptionsService) {}
  @Post()
  async createBook(@Res() response, @Body() subscription: Subscription) {
    const newSubscription = await this.subscriptionService.createSubscription(
      subscription,
    );
    return response.status(HttpStatus.CREATED).json({ newSubscription });
  }
  @Get()
  async findAll(@Res() response) {
    const subscriptions = await this.subscriptionService.findAll();
    return response.status(HttpStatus.CREATED).json({ subscriptions });
  }
  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const subscription = await this.subscriptionService.findOne(id);
    return response.status(HttpStatus.CREATED).json({ subscription });
  }
  @Put('/:id')
  async updateById(
    @Res() response,
    @Body() subscription: Subscription,
    @Param('id') id,
  ) {
    const updateResult = await this.subscriptionService.updateSubscription(
      id,
      subscription,
    );
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }
}
