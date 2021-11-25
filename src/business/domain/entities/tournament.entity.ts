import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Participant } from './participant.entity';

@Entity('tournaments')
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: false, name: 'is_team_mode' })
  isTeamMode: number;
  @Column({ default: null, name: 'prize_pool' })
  prizePool: number;
  @Column({ default: null, name: 'game_id' })
  gameId: number;
  @Column({ default: null, name: 'tournament_capacity' })
  tournamentCapacity: number;
  @Column({ name: 'user_id' })
  userId: number;
  @Column({ name: 'publication_id' })
  publicationId: number;

  @OneToMany(
    () => Participant,
    (participant: Participant) => participant.tournament,
  )
  public participants: Participant[];

  participantInTournament(userId: number): boolean {
    // A participant cannot join a tournament twice.
    if (this.participants == null) return false;
    return this.participants.filter((p) => p.userId == userId).length > 0;
  }

  capacityNotReached(): boolean {
    // Verify that the number of participants does not exceed the established limit.
    if (this.participants == null) return false;
    return this.participants.length < this.tournamentCapacity;
  }
}
