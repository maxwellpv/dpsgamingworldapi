import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { Profile } from '../profile.entity';

@Entity('favorite-games')
export class FavoriteGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gameName: string;

  // Relations
  @ManyToOne(() => Profile, (profile: Profile) => profile.favoriteGames)
  public profile: Profile;
}
