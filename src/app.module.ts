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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'gamingworld_dps',
      entities: [
        User,
        Profile,
        GameExperience,
        StreamingCategory,
        Tournament,
        Publication,
      ],
      synchronize: true,
      dropSchema: false,
      autoLoadEntities: true,
    }),
    PublicationsModule,
    TournamentsModule,
    UsersModule,
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
