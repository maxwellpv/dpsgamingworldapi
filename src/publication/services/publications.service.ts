import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Publication } from '../domain/entities/publication.entity';

@Injectable()
export class PublicationsService {
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
