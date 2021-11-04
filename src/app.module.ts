import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesModule } from './profiles/profiles.module';
import { Profile } from './profiles/profile.entity';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { GameExperience } from './profiles/game-experiences/game-experience.entity';
import { StreamingCategory } from './profiles/streaming-categories/streaming-category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'gamingworld_dps',
      entities: [User, Profile, GameExperience, StreamingCategory],
      synchronize: true,
      dropSchema: false,
      autoLoadEntities: true,
    }),
    UsersModule,
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
