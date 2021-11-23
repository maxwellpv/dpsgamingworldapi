import { Tournament } from '../entities/tournament.entity';

export interface TournamentsInterfaceService {
  findAll(): Promise<Tournament[]>;
  findOne(id: number): Promise<Tournament>;
  createTournament(tournament: Tournament): Promise<Tournament>;
  updateTournament(id: number, tournament: Tournament): Promise<Tournament>;
}
