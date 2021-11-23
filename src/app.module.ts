import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesModule } from './profile/modules/profiles.module';
import { Profile } from './profile/domain/entities/profile.entity';
import { User } from './security/domain/entities/user.entity';
import { UsersModule } from './security/modules/users.module';
import { GameExperience } from './profile/domain/entities/game-experience.entity';
import { StreamingCategory } from './profile/domain/entities/streaming-category.entity';
import { Publication } from './publication/domain/entities/publication.entity';
import { PublicationsModule } from './publication/modules/publications.module';
import { Tournament } from './business/domain/entities/tournament.entity';
import { TournamentsModule } from './business/modules/tournaments.module';
import { ExternalAPI } from './shared/inbound/external-apis/domain/entities/external-api.entity';
import { Game } from './shared/inbound/games/domain/entities/game.entity';
import { ExternalAPIModule } from './shared/inbound/external-apis/modules/external-api.module';
import { GamesModule } from './shared/inbound/games/modules/games.module';
import { NewsModule } from './shared/inbound/news/modules/news.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'xempre.com',
      port: 3306,
      username: 'external',
      password: 'XempreDB',
      database: 'gamingworld_dps',
      entities: [
        User,
        Profile,
        GameExperience,
        StreamingCategory,
        Tournament,
        Publication,
        ExternalAPI,
        Game,
      ],
      synchronize: true,
      dropSchema: false,
      autoLoadEntities: true,
    }),
    PublicationsModule,
    TournamentsModule,
    UsersModule,
    ProfilesModule,
    ExternalAPIModule,
    GamesModule,
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
