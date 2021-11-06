import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { TournamentsService } from '../services/tournaments.service';
import { Tournament } from '../entities/tournament.entity';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}
  @Post()
  async createBook(@Res() response, @Body() tournament: Tournament) {
    const newTournament = await this.tournamentsService.createPublication(
      tournament,
    );
    return response.status(HttpStatus.CREATED).json({ newTournament });
  }
  @Get()
  async findAll(@Res() response) {
    const tournaments = await this.tournamentsService.findAll();
    return response.status(HttpStatus.CREATED).json({ tournaments });
  }
  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const tournament = await this.tournamentsService.findOne(id);
    return response.status(HttpStatus.CREATED).json({ tournament });
  }

  @Put('/:id')
  async updateById(
    @Res() response,
    @Body() tournament: Tournament,
    @Param('id') id,
  ) {
    const updateResult = await this.tournamentsService.updatePublication(
      id,
      tournament,
    );
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Put('/:id/participant/:participantId')
  async updateTournamentPoints(
    @Res() response,
    @Param('participantId') participantId,
  ) {
    const tournament = await this.tournamentsService.findOne(participantId);
    return response.status(HttpStatus.CREATED).json({ tournament });
  }
}
