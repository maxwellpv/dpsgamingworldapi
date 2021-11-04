import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TournamentExperience } from './tournament-experience.entity';

@Injectable()
export class TournamentExperiencesService {
  constructor(
    @InjectRepository(TournamentExperience)
    private tournamentExperienceRepository: Repository<TournamentExperience>,
  ) {}

  create(
    tournamentExperience: TournamentExperience,
  ): Promise<TournamentExperience> {
    return this.tournamentExperienceRepository.save(tournamentExperience);
  }

  findAll(): Promise<TournamentExperience[]> {
    return this.tournamentExperienceRepository.find();
  }

  findOne(id: number): Promise<TournamentExperience> {
    return this.tournamentExperienceRepository.findOne(id);
  }
}
