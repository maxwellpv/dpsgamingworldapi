import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StreamerSponsor } from './streamer-sponsor';

@Injectable()
export class StreamerSponsorsService {
  constructor(
    @InjectRepository(StreamerSponsor)
    private gameExperienceRepository: Repository<StreamerSponsor>,
  ) {}

  create(gameExperience: StreamerSponsor): Promise<StreamerSponsor> {
    return this.gameExperienceRepository.save(gameExperience);
  }

  findAll(): Promise<StreamerSponsor[]> {
    return this.gameExperienceRepository.find();
  }

  findOne(id: number): Promise<StreamerSponsor> {
    return this.gameExperienceRepository.findOne(id);
  }
}
