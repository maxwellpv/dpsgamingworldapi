import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { Profile } from './profile.entity';

@Entity('tournament-experiences')
export class TournamentExperience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: number;

  // Relations
  @ManyToOne(() => Profile, (profile: Profile) => profile.tournamentExperiences)
  public profile: Profile;
}
