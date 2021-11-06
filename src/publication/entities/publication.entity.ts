import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('publications')
export class Publication {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: null })
  publicationType: number;
  @Column()
  title: string;
  @Column()
  content: string;
  @Column({ default: null })
  participantLimit: number;
  @Column({ default: null })
  prize_pool: number;
  @Column({ default: null })
  urlToImage: string;
  @Column({ default: null })
  tournamentDate: string;
  @Column({ default: null })
  tournamentHour: string;
  @Column({ default: null })
  publicatedAt: string;
  @Column({ default: null })
  gameId: number;
  @Column()
  userId: number;
}
