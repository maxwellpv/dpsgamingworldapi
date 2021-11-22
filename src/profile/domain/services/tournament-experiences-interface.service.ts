import { TournamentExperience } from '../entities/tournament-experience.entity';

export interface TournamentExperiencesInterfaceService {
  create(
    tournamentExperience: TournamentExperience,
  ): Promise<TournamentExperience>;

  findAll(): Promise<TournamentExperience[]>;

  findOne(id: number): Promise<TournamentExperience>;
}
