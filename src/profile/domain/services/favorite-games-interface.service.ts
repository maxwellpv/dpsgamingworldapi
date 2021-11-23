import { FavoriteGame } from '../entities/favorite-game.entity';

export interface FavoriteGamesInterfaceService {
  create(favoriteGame: FavoriteGame): Promise<FavoriteGame>;

  findAll(): Promise<FavoriteGame[]>;

  findOne(id: number): Promise<FavoriteGame>;
}
