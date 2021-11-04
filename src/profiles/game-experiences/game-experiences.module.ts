import { Module } from '@nestjs/common';
import { GameExperiencesService } from './game-experiences.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameExperience } from './game-experience.entity';
import { Profile } from '../profile.entity';
import { ProfilesModule } from '../profiles.module';

@Module({
  imports: [TypeOrmModule.forFeature([GameExperience])],
  providers: [GameExperiencesService],
  exports: [TypeOrmModule],
})
export class GameExperiencesModule {}
