import { Module } from '@nestjs/common';
import { StreamerSponsorsService } from './streamer-sponsors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamerSponsor } from './streamer-sponsor';

@Module({
  imports: [TypeOrmModule.forFeature([StreamerSponsor])],
  providers: [StreamerSponsorsService],
  exports: [TypeOrmModule],
})
export class StreamerSponsorsModule {}
