import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('participant')
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: false })
  isTeamMode: number;
  @Column({ default: null })
  prizePool: number;
  @Column({ default: null })
  gameId: number;
  @Column()
  userId: number;
  @Column()
  publicationId: number;
}
