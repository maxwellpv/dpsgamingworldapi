import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { GameExperience } from './game-experience.entity';
import { StreamingCategory } from './streaming-category.entity';
import { StreamerSponsorEntity } from './streamer-sponsor.entity';
import { TournamentExperience } from './tournament-experience.entity';
import { FavoriteGame } from './favorite-game.entity';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'user_id' })
  public userId: number;

  @Column({ name: 'favorite_game_id' })
  public favoriteGameId: number;

  @Column({ name: 'game_level' })
  public gameLevel: string;

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
