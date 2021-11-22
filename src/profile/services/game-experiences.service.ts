import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameExperience } from '../domain/entities/game-experience.entity';
import { GameExperiencesInterfaceService } from '../domain/services/game-experiences-interface.service';

@Injectable()
export class GameExperiencesService implements GameExperiencesInterfaceService {
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
