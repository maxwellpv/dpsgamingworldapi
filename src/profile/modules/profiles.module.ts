import { Module } from '@nestjs/common';
import { ProfilesService } from '../services/profiles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from '../entities/profile.entity';
import { ProfilesController } from '../controllers/profiles.controller';
import { GameExperiencesModule } from './game-experiences.module';
import { GameExperiencesService } from '../services/game-experiences.service';
import { StreamingCategoriesService } from '../services/streaming-categories.service';
import { StreamerSponsorsService } from '../services/streamer-sponsors.service';
import { StreamingCategoriesModule } from './streaming-categories.module';
import { StreamerSponsorsModule } from './streamer-sponsors.module';
import { TournamentExperiencesModule } from './tournament-experiences.module';
import { TournamentExperiencesService } from '../services/tournament-experiences.service';
import { FavoriteGamesModule } from './favorite-games.module';
import { FavoriteGamesService } from '../services/favorite-games.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile]),
    GameExperiencesModule,
    StreamingCategoriesModule,
    StreamerSponsorsModule,
    TournamentExperiencesModule,
    FavoriteGamesModule,
  ],

  providers: [
    ProfilesService,
    GameExperiencesService,
    StreamingCategoriesService,
    StreamerSponsorsService,
    TournamentExperiencesService,
    FavoriteGamesService,
  ],

  exports: [TypeOrmModule],

  controllers: [ProfilesController],
})
export class ProfilesModule {}
