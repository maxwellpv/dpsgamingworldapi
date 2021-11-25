import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository, UpdateResult } from 'typeorm';
import { ParticipantsInterfaceService } from '../domain/services/participants-interface.service';
import { Participant } from '../domain/entities/participant.entity';
import { TournamentsService } from './tournaments.service';
import { Tournament } from '../domain/entities/tournament.entity';

@Injectable()
export class ParticipantsService implements ParticipantsInterfaceService {
  constructor(
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
    private tournamentService: TournamentsService,
  ) {}
  findAll(): Promise<Participant[]> {
    return this.participantRepository.find();
  }
  findOne(id: string): Promise<Participant> {
    return this.participantRepository.findOne(id);
  }
  async createParticipant(
    participant: Participant,
    tournamentId: number,
  ): Promise<Participant> {
    const tournament = await this.tournamentService.findOne(tournamentId);

    tournament.participants = await this.findAllByTournamentId(tournamentId);

    if (tournament.participantInTournament(participant.userId)) return null;
    if (!tournament.capacityNotReached()) return null;
    participant.tournament = tournament;
    return this.participantRepository.save(participant);
  }

  async findAllByTournamentId(tournamentId: number) {
    return await this.participantRepository
      .createQueryBuilder('participants')
      .where(`participants.tournament.id = ${tournamentId}`)
      .getMany();
  }
  async updateParticipant(
    id: string,
    participant: Participant,
  ): Promise<Participant> {
    if (participant.points < 0) return null;
    const updateParticipant: Participant = {} as Participant;
    updateParticipant.points = participant.points;
    const todo = await this.participantRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.participantRepository.update(id, updateParticipant);
    return await this.participantRepository.findOne(id);
  }
}
