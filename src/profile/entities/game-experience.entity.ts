import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { Profile } from './profile.entity';

@Entity('game-experiences')
export class GameExperience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gameName: string;

  @Column()
  time: number;

  @Column()
  timeUnit: string;

  // Relations
  @ManyToOne(() => Profile, (profile: Profile) => profile.gameExperiences)
  public profile: Profile;
}
