import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StreamingCategory } from './streaming-category.entity';

@Injectable()
export class StreamingCategoriesService {
  constructor(
    @InjectRepository(StreamingCategory)
    private gameExperienceRepository: Repository<StreamingCategory>,
  ) {}

  create(gameExperience: StreamingCategory): Promise<StreamingCategory> {
    return this.gameExperienceRepository.save(gameExperience);
  }

  findAll(): Promise<StreamingCategory[]> {
    return this.gameExperienceRepository.find();
  }

  findOne(id: number): Promise<StreamingCategory> {
    return this.gameExperienceRepository.findOne(id);
  }
}
