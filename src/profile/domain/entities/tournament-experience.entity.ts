import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { Profile } from './profile.entity';
@Entity('tournament_experiences')
export class TournamentExperience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: number;

  // Relations
  @ManyToOne(() => Profile, (profile: Profile) => profile.tournamentExperiences)
  @JoinColumn({ name: 'profile_id' })
  public profile: Profile;
}
