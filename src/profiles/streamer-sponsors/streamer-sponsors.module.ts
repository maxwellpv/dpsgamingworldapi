import { Module } from '@nestjs/common';
import { StreamerSponsorsService } from './streamer-sponsors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamerSponsorEntity } from './streamer-sponsor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StreamerSponsorEntity])],
  providers: [StreamerSponsorsService],
  exports: [TypeOrmModule],
})
export class StreamerSponsorsModule {}
