import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { ProfilesController } from './profiles.controller';
import { GameExperiencesModule } from './game-experiences/game-experiences.module';
import { GameExperiencesService } from './game-experiences/game-experiences.service';

@Module({
  imports: [TypeOrmModule.forFeature([Profile]), GameExperiencesModule],

  providers: [ProfilesService, GameExperiencesService],

  exports: [TypeOrmModule],

  controllers: [ProfilesController],
})
export class ProfilesModule {}
