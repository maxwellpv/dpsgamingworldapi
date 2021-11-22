import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { Profile } from './profile.entity';

@Entity('streaming_categories')
export class StreamingCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relations
  @ManyToOne(() => Profile, (profile: Profile) => profile.streamingCategories)
  @JoinColumn({ name: 'profile_id' })
  public profile: Profile;
}
