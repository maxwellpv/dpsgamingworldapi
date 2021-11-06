import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('team')
export class Team {
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
