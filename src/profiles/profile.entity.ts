import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { GameExperience } from './game-experiences/game-experience.entity';
import { StreamingCategory } from './streaming-categories/streaming-category.entity';
import { StreamerSponsorEntity } from './streamer-sponsors/streamer-sponsor.entity';
import { TournamentExperience } from './tournament-experiences/tournament-experience.entity';
import { FavoriteGame } from './favorite-games/favorite-game.entity';

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
    () => StreamerSponsorEntity,
    (streamerSponsor: StreamerSponsorEntity) => streamerSponsor.profile,
  )
  public streamerSponsors: StreamerSponsorEntity[];

  @OneToMany(
    () => TournamentExperience,
    (tournamentExperience: TournamentExperience) =>
      tournamentExperience.profile,
  )
  public tournamentExperiences: TournamentExperience[];

  @OneToMany(
    () => FavoriteGame,
    (favoriteGame: FavoriteGame) => favoriteGame.profile,
  )
  public favoriteGames: FavoriteGame[];
}
