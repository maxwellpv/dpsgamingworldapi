import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { Profile } from './profile.entity';

@Entity('favorite_games')
export class FavoriteGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'game_name' })
  gameName: string;

  // Relations
  @ManyToOne(() => Profile, (profile: Profile) => profile.favoriteGames)
  @JoinColumn({ name: 'profile_id' })
  public profile: Profile;
}
