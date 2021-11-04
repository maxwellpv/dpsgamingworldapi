import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StreamerSponsor } from './streamer-sponsor';

@Injectable()
export class StreamerSponsorsService {
  constructor(
    @InjectRepository(StreamerSponsor)
    private streamerSponsorRepository: Repository<StreamerSponsor>,
  ) {}

  create(streamerSponsor: StreamerSponsor): Promise<StreamerSponsor> {
    return this.streamerSponsorRepository.save(streamerSponsor);
  }

  findAll(): Promise<StreamerSponsor[]> {
    return this.streamerSponsorRepository.find();
  }

  findOne(id: number): Promise<StreamerSponsor> {
    return this.streamerSponsorRepository.findOne(id);
  }
}
