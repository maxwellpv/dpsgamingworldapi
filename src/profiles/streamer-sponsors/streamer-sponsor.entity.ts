import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { Profile } from '../profile.entity';

@Entity('streamer-sponsors')
export class StreamerSponsorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relations
  @ManyToOne(() => Profile, (profile: Profile) => profile.streamerSponsors)
  public profile: Profile;
}
