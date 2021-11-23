import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsController } from '../controllers/news.controller';
import { NewsService } from '../services/news.service';

@Module({
  imports: [TypeOrmModule],
  providers: [NewsService],
  exports: [TypeOrmModule],
  controllers: [NewsController],
})
export class NewsModule {}
