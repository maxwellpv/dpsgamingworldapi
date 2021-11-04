import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StreamerSponsorEntity } from './streamer-sponsor.entity';

@Injectable()
export class StreamerSponsorsService {
  constructor(
    @InjectRepository(StreamerSponsorEntity)
    private streamerSponsorRepository: Repository<StreamerSponsorEntity>,
  ) {}

  create(
    streamerSponsor: StreamerSponsorEntity,
  ): Promise<StreamerSponsorEntity> {
    return this.streamerSponsorRepository.save(streamerSponsor);
  }

  findAll(): Promise<StreamerSponsorEntity[]> {
    return this.streamerSponsorRepository.find();
  }

  findOne(id: number): Promise<StreamerSponsorEntity> {
    return this.streamerSponsorRepository.findOne(id);
  }
}
