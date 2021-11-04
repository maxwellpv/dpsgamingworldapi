import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { ProfilesController } from './profiles.controller';
import { GameExperiencesModule } from './game-experiences/game-experiences.module';
import { GameExperiencesService } from './game-experiences/game-experiences.service';
import { StreamingCategoriesService } from './streaming-categories/streaming-categories.service';
import { StreamerSponsorsService } from './streamer-sponsors/streamer-sponsors.service';
import { StreamingCategoriesModule } from './streaming-categories/streaming-categories.module';
import { StreamerSponsorsModule } from './streamer-sponsors/streamer-sponsors.module';
import { TournamentExperiencesModule } from './tournament-experiences/tournament-experiences.module';
import { TournamentExperiencesService } from './tournament-experiences/tournament-experiences.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile]),
    GameExperiencesModule,
    StreamingCategoriesModule,
    StreamerSponsorsModule,
    TournamentExperiencesModule,
  ],

  providers: [
    ProfilesService,
    GameExperiencesService,
    StreamingCategoriesService,
    StreamerSponsorsService,
    TournamentExperiencesService,
  ],

  exports: [TypeOrmModule],

  controllers: [ProfilesController],
})
export class ProfilesModule {}
