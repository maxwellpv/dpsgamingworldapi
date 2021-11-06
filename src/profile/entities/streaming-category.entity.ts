import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { Profile } from './profile.entity';

@Entity('streaming-categories')
export class StreamingCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relations
  @ManyToOne(() => Profile, (profile: Profile) => profile.streamingCategories)
  public profile: Profile;
}
