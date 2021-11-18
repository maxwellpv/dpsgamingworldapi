import { Module } from '@nestjs/common';
import { TournamentsService } from '../services/tournaments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from '../domain/entities/tournament.entity';
import { TournamentsController } from '../controllers/tournaments.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament])],
  providers: [TournamentsService],
  controllers: [TournamentsController],
})
export class TournamentsModule {}
