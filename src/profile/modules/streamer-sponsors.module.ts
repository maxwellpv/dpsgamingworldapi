import { Module } from '@nestjs/common';
import { StreamerSponsorsService } from '../services/streamer-sponsors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamerSponsorEntity } from '../entities/streamer-sponsor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StreamerSponsorEntity])],
  providers: [StreamerSponsorsService],
  exports: [TypeOrmModule],
})
export class StreamerSponsorsModule {}
