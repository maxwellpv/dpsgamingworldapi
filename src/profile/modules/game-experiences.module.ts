import { Module } from '@nestjs/common';
import { GameExperiencesService } from '../services/game-experiences.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameExperience } from '../entities/game-experience.entity';
import { Profile } from '../entities/profile.entity';
import { ProfilesModule } from './profiles.module';

@Module({
  imports: [TypeOrmModule.forFeature([GameExperience])],
  providers: [GameExperiencesService],
  exports: [TypeOrmModule],
})
export class GameExperiencesModule {}
