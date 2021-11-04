import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteGame } from './favorite-game.entity';

@Injectable()
export class FavoriteGamesService {
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
