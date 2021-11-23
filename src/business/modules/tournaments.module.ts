import { Module } from '@nestjs/common';
import { TournamentsService } from '../services/tournaments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from '../domain/entities/tournament.entity';
import { TournamentsController } from '../controllers/tournaments.controller';
import { ParticipantsService } from '../services/participants.service';
import { Participant } from '../domain/entities/participant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament, Participant])],
  providers: [TournamentsService, ParticipantsService],
  controllers: [TournamentsController],
  exports: [TypeOrmModule],
})
export class TournamentsModule {}
