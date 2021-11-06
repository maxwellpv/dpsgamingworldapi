import { Module } from '@nestjs/common';
import { FavoriteGamesService } from '../services/favorite-games.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteGame } from '../entities/favorite-game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteGame])],
  providers: [FavoriteGamesService],
  exports: [TypeOrmModule],
})
export class FavoriteGamesModule {}
