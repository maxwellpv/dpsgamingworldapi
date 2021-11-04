import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { GameExperience } from './game-experiences/game-experience.entity';
import { StreamingCategory } from './streaming-categories/streaming-category.entity';
import { StreamerSponsor } from './streamer-sponsors/streamer-sponsor';
import { TournamentExperience } from './tournament-experiences/tournament-experience.entity';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public user_id: number;

  @Column()
  public favorite_game_id: number;

  @Column()
  public game_level: string;

  @Column({ default: false })
  public streamer: boolean;

  // Relations

  @OneToMany(
    () => GameExperience,
    (gameExperience: GameExperience) => gameExperience.profile,
  )
  public gameExperiences: GameExperience[];

  @OneToMany(
    () => StreamingCategory,
    (streamingCategory: StreamingCategory) => streamingCategory.profile,
  )
  public streamingCategories: StreamingCategory[];

  @OneToMany(
    () => StreamerSponsor,
    (streamerSponsor: StreamerSponsor) => streamerSponsor.profile,
  )
  public streamerSponsors: StreamerSponsor[];

  @OneToMany(
    () => TournamentExperience,
    (tournamentExperience: TournamentExperience) =>
      tournamentExperience.profile,
  )
  public tournamentExperiences: TournamentExperience[];
}
