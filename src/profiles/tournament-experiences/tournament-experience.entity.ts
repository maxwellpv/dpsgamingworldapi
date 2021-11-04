import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { Profile } from '../profile.entity';

@Entity('streaming-categories')
export class TournamentExperience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: number;

  // Relations
  @ManyToOne(() => Profile, (profile: Profile) => profile.streamingCategories)
  public profile: Profile;
}
