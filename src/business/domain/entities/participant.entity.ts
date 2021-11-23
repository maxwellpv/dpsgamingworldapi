import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('participants')
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: 0, name: 'points' })
  points: number;
  @Column({ name: 'user_id' })
  userId: number;
  @Column({ name: 'tournament_id' })
  tournamentId: number;
}
