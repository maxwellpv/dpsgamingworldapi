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
    let tournament: Tournament;
    await this.tournamentService
      .findOne(tournamentId)
      .then((x) => (tournament = x));

    let participants: Participant[];

    await this.findAllByTournamentId(tournamentId).then(
      (x) => (participants = x),
    );

    if (participants.length + 1 > tournament.tournamentCapacity) return null;
    if (participants.find((x) => x.userId == participant.userId)) return null;

    participant.tournamentId = tournamentId;
    return this.participantRepository.save(participant);
  }

  async findAllByTournamentId(tournamentId: number) {
    return await this.participantRepository
      .createQueryBuilder('participants')
      .where(`participants.tournamentId = ${tournamentId}`)
      .getMany();
  }
  async updateParticipant(
    id: string,
    participant: Participant,
  ): Promise<Participant> {
    const todo = await this.participantRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.participantRepository.update(id, participant);
    return await this.participantRepository.findOne(id);
  }
}
