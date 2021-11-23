import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { GamesService } from '../services/games.service';

@ApiTags('games')
@Controller('api/v1/games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  async findRandomList(@Res() response) {
    const games = await this.gamesService.findRandomList();
    return response.status(HttpStatus.OK).json({ games });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id: string) {
    const game = await this.gamesService.findOne(id);
    return response.status(HttpStatus.OK).json({ game });
  }

  @Get('/find')
  async findByGameName(@Res() response, @Query('name') name: string) {
    const games = await this.gamesService.findByGameName(name);
    return response.status(HttpStatus.OK).json({ games });
  }
}
