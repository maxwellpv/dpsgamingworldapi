import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tournament } from './tournament.entity';

@Entity('participants')
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: 0, name: 'points' })
  points: number;
  @Column({ name: 'user_id' })
  userId: number;
  @ManyToOne(
    () => Tournament,
    (tournament: Tournament) => tournament.participants,
  )
  @JoinColumn({ name: 'tournament_id' })
  public tournament: Tournament;
}
