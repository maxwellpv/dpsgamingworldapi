import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TournamentExperience } from '../domain/entities/tournament-experience.entity';
import { TournamentExperiencesInterfaceService } from '../domain/services/tournament-experiences-interface.service';

@Injectable()
export class TournamentExperiencesService
  implements TournamentExperiencesInterfaceService
{
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
