import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Tournament } from '../domain/entities/tournament.entity';
import { TournamentsInterfaceService } from '../domain/services/tournaments-interface.service';

@Injectable()
export class TournamentsService implements TournamentsInterfaceService {
  constructor(
    @InjectRepository(Tournament)
    private tournamentsService: Repository<Tournament>,
  ) {}
  findAll(): Promise<Tournament[]> {
    return this.tournamentsService.find();
  }
  findOne(id: number): Promise<Tournament> {
    return this.tournamentsService.findOne(id);
  }
  createTournament(tournament: Tournament): Promise<Tournament> {
    tournament.participants = [];
    return this.tournamentsService.save(tournament);
  }
  async updateTournament(
    id: number,
    tournament: Tournament,
  ): Promise<Tournament> {
    const todo = await this.tournamentsService.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.tournamentsService.update(id, tournament);
    return await this.tournamentsService.findOne(id);
  }
}
