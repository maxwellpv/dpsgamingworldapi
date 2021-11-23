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
import { Tournament } from '../domain/entities/tournament.entity';
import { ApiTags } from '@nestjs/swagger';
import { ParticipantsService } from '../services/participants.service';

@ApiTags('tournaments')
@Controller('api/v1/tournaments')
export class TournamentsController {
  constructor(
    private readonly tournamentsService: TournamentsService,
    private readonly participantService: ParticipantsService,
  ) {}
  @Post()
  async createBook(@Res() response, @Body() tournament: Tournament) {
    const newTournament = await this.tournamentsService.createTournament(
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

  @Get('/:id/participants')
  async findParticipantsByTournamentId(@Res() response, @Param('id') id) {
    const tournament = await this.participantService.findAllByTournamentId(id);
    return response.status(HttpStatus.CREATED).json({ tournament });
  }

  @Put('/:id')
  async updateById(
    @Res() response,
    @Body() tournament: Tournament,
    @Param('id') id,
  ) {
    const updateResult = await this.tournamentsService.updateTournament(
      id,
      tournament,
    );
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Post('/:id/participants')
  async createTournamentParticipant(
    @Res() response,
    @Param('id') tournamentId,
    @Body() participant,
  ) {
    const newParticipant = await this.participantService.createParticipant(
      participant,
      tournamentId,
    );
    return response.status(HttpStatus.CREATED).json({ newParticipant });
  }

  @Put('/:id/participant/:participantId')
  async updateTournamentPoints(
    @Res() response,
    @Param('participantId') participantId,
    @Body() participant,
  ) {
    const updateResult = await this.participantService.updateParticipant(
      participantId,
      participant,
    );
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }
}
