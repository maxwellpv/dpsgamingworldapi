import { Module } from '@nestjs/common';
import { StreamingCategoriesService } from '../services/streaming-categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamingCategory } from '../domain/entities/streaming-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StreamingCategory])],
  providers: [StreamingCategoriesService],
  exports: [TypeOrmModule],
})
export class StreamingCategoriesModule {}
