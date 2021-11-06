import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameExperience } from '../entities/game-experience.entity';

@Injectable()
export class GameExperiencesService {
  constructor(
    @InjectRepository(GameExperience)
    private gameExperienceRepository: Repository<GameExperience>,
  ) {}

  create(gameExperience: GameExperience): Promise<GameExperience> {
    return this.gameExperienceRepository.save(gameExperience);
  }

  findAll(): Promise<GameExperience[]> {
    return this.gameExperienceRepository.find();
  }

  findOne(id: number): Promise<GameExperience> {
    return this.gameExperienceRepository.findOne(id);
  }
}
