import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { Profile } from './profile.entity';
import { ApiTags } from '@nestjs/swagger';
import { GameExperiencesService } from './game-experiences/game-experiences.service';
import { StreamingCategoriesService } from './streaming-categories/streaming-categories.service';
import { StreamerSponsorsService } from './streamer-sponsors/streamer-sponsors.service';
import { TournamentExperiencesService } from './tournament-experiences/tournament-experiences.service';

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(
    private readonly profilesService: ProfilesService,
    private readonly gameExperiencesService: GameExperiencesService,
    private readonly streamingCategoriesService: StreamingCategoriesService,
    private readonly streamerSponsorsService: StreamerSponsorsService,
    private readonly tournamentExperiencesService: TournamentExperiencesService,
  ) {}

  @Post()
  async create(@Res() response, @Body() profile: Profile) {
    for (let i = 0; i < profile.gameExperiences.length; ++i) {
      await this.gameExperiencesService.create(profile.gameExperiences[i]);
    }

    for (let i = 0; i < profile.streamingCategories.length; ++i) {
      await this.streamingCategoriesService.create(
        profile.streamingCategories[i],
      );
    }

    for (let i = 0; i < profile.streamerSponsors.length; ++i) {
      await this.streamerSponsorsService.create(profile.streamerSponsors[i]);
    }

    for (let i = 0; i < profile.tournamentExperiences.length; ++i) {
      await this.tournamentExperiencesService.create(
        profile.tournamentExperiences[i],
      );
    }

    const newProfile = await this.profilesService.create(profile);
    return response.status(HttpStatus.CREATED).json({ newProfile });
  }

  @Get()
  async findAll(@Res() response) {
    const profiles = await this.profilesService.findAll({
      relations: [
        'gameExperiences',
        'streamingCategories',
        'streamerSponsors',
        'tournamentExperiences',
      ],
    });
    return response.status(HttpStatus.OK).json({ profiles });
  }

  @Get(':id')
  async findById(@Res() response, @Param('id') id) {
    const profile = await this.profilesService.findOne(id, {
      relations: [
        'gameExperiences',
        'streamingCategories',
        'streamerSponsors',
        'tournamentExperiences',
      ],
    });
    return response.status(HttpStatus.OK).json({ profile });
  }
}
