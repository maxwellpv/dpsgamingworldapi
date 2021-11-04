import { Module } from '@nestjs/common';
import { FavoriteGamesService } from './favorite-games.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteGame } from './favorite-game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteGame])],
  providers: [FavoriteGamesService],
  exports: [TypeOrmModule],
})
export class FavoriteGamesModule {}
