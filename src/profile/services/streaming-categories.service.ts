import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StreamingCategory } from '../entities/streaming-category.entity';

@Injectable()
export class StreamingCategoriesService {
  constructor(
    @InjectRepository(StreamingCategory)
    private streamingCategoryRepository: Repository<StreamingCategory>,
  ) {}

  create(streamingCategory: StreamingCategory): Promise<StreamingCategory> {
    return this.streamingCategoryRepository.save(streamingCategory);
  }

  findAll(): Promise<StreamingCategory[]> {
    return this.streamingCategoryRepository.find();
  }

  findOne(id: number): Promise<StreamingCategory> {
    return this.streamingCategoryRepository.findOne(id);
  }
}
