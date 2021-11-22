import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('publications')
export class Publication {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: null, name: 'publication_type' })
  publicationType: number;
  @Column()
  title: string;
  @Column()
  content: string;
  @Column({ name: 'participant_limit', default: null })
  participantLimit: number;
  @Column({ name: 'prize_pool', default: null })
  prizePool: number;
  @Column({ name: 'url_to_image', default: null })
  urlToImage: string;
  @Column({ name: 'tournament_date', default: null })
  tournamentDate: string;
  @Column({ name: 'tournament_hour', default: null })
  tournamentHour: string;
  @Column({ name: 'publicated_at', default: null })
  publicatedAt: string;
  @Column({ name: 'game_id', default: null })
  gameId: number;
  @Column()
  userId: number;
}
