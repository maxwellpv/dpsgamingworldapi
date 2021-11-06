import { Module } from '@nestjs/common';
import { TournamentExperiencesService } from '../services/tournament-experiences.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentExperience } from '../entities/tournament-experience.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TournamentExperience])],
  providers: [TournamentExperiencesService],
  exports: [TypeOrmModule],
})
export class TournamentExperiencesModule {}
