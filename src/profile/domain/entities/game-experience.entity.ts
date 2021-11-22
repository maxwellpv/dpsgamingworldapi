import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { Profile } from './profile.entity';

@Entity('game_experiences')
export class GameExperience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'game_name' })
  gameName: string;

  @Column()
  time: number;

  @Column({ name: 'time_unit' })
  timeUnit: string;

  // Relations
  @ManyToOne(() => Profile, (profile: Profile) => profile.gameExperiences)
  @JoinColumn({ name: 'profile_id' })
  public profile: Profile;
}
