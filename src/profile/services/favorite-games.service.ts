import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteGame } from '../domain/entities/favorite-game.entity';
import { FavoriteGamesInterfaceService } from '../domain/services/favorite-games-interface.service';

@Injectable()
export class FavoriteGamesService implements FavoriteGamesInterfaceService {
  constructor(
    @InjectRepository(FavoriteGame)
    private favoriteGameRepository: Repository<FavoriteGame>,
  ) {}

  create(favoriteGame: FavoriteGame): Promise<FavoriteGame> {
    return this.favoriteGameRepository.save(favoriteGame);
  }

  findAll(): Promise<FavoriteGame[]> {
    return this.favoriteGameRepository.find();
  }

  findOne(id: number): Promise<FavoriteGame> {
    return this.favoriteGameRepository.findOne(id);
  }
}
