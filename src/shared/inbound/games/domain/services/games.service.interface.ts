import { Game } from '../entities/game.entity';

export interface GamesServiceInterface {
  findRandomList(): Promise<Game[]>;

  findOne(id: string): Promise<Game>;

  findByGameName(name: string): Promise<Game[]>;
}
