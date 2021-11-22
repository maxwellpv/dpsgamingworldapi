import { StreamerSponsorEntity } from '../entities/streamer-sponsor.entity';

export interface StreamerSponsorsInterfaceService {
  create(
    streamerSponsor: StreamerSponsorEntity,
  ): Promise<StreamerSponsorEntity>;

  findAll(): Promise<StreamerSponsorEntity[]>;

  findOne(id: number): Promise<StreamerSponsorEntity>;
}
