import { Tournament } from '../entities/tournament.entity';

export interface TournamentsInterfaceService {
  findAll(): Promise<Tournament[]>;
  findOne(id: string): Promise<Tournament>;
  createPublication(publication: Tournament): Promise<Tournament>;
  updatePublication(id: string, tournament: Tournament): Promise<Tournament>;
}
