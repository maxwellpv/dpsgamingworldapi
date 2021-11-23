import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('participants')
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: false, name: 'is_team_mode' })
  isTeamMode: number;
  @Column({ default: null, name: 'prize_pool' })
  prizePool: number;
  @Column({ default: null, name: 'game_id' })
  gameId: number;
  @Column({ name: 'user_id' })
  userId: number;
  @Column()
  publicationId: number;
}