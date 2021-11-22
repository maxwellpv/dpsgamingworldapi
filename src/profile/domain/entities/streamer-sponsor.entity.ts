import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { Profile } from './profile.entity';

@Entity('streamer_sponsors')
export class StreamerSponsorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relations
  @ManyToOne(() => Profile, (profile: Profile) => profile.streamerSponsors)
  @JoinColumn({ name: 'profile_id' })
  public profile: Profile;
}
