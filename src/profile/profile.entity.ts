import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  favorite_game_id: number;

  @Column()
  game_level: string;

  @Column({ default: false })
  streamer: boolean;
}
