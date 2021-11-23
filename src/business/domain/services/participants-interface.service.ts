import { Participant } from '../entities/participant.entity';

export interface ParticipantsInterfaceService {
  findAll(): Promise<Participant[]>;
  findOne(id: string): Promise<Participant>;
  createParticipant(
    participant: Participant,
    tournamentId: number,
  ): Promise<Participant>;
  updateParticipant(id: string, participant: Participant): Promise<Participant>;
  findAllByTournamentId(tournamentId: number);
}
