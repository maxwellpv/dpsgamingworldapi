import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Publication } from '../domain/entities/publication.entity';
import { PublicationsInterfaceService } from '../domain/services/publication-interface.service';

@Injectable()
export class PublicationsService implements PublicationsInterfaceService {
  constructor(
    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,
  ) {}
  findAll(): Promise<Publication[]> {
    return this.publicationRepository.find();
  }
  findOne(id: string): Promise<Publication> {
    return this.publicationRepository.findOne(id);
  }
  createPublication(publication: Publication): Promise<Publication> {
    const p = new Publication();
    // Validation dates
    p.participantLimit = publication.participantLimit;
    p.tournamentDate = publication.tournamentDate;
    p.tournamentHour = publication.tournamentHour;
    if (p.validTournamentDate()) return null;
    if (p.validParticipantLimit()) return null;
    return this.publicationRepository.save(publication);
  }
  async updatePublication(
    id: string,
    publication: Publication,
  ): Promise<Publication> {
    const todo = await this.publicationRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.publicationRepository.update(id, publication);
    return await this.publicationRepository.findOne(id);
  }
}
