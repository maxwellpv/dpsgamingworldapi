import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalAPIModule } from '../../external-apis/modules/external-api.module';
import { ExternalAPIService } from '../../external-apis/services/external-api.service';
import { GamesService } from '../services/games.service';
import { GamesController } from '../controllers/games.controller';

@Module({
  imports: [TypeOrmModule, ExternalAPIModule],
  providers: [GamesService, ExternalAPIService],
  exports: [TypeOrmModule],
  controllers: [GamesController],
})
export class GamesModule {}
