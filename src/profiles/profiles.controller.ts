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

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(
    private readonly profilesService: ProfilesService,
    private readonly gameExperiencesService: GameExperiencesService,
  ) {}

  @Post()
  async create(@Res() response, @Body() profile: Profile) {
    for (let i = 0; i < profile.gameExperiences.length; ++i) {
      await this.gameExperiencesService.create(profile.gameExperiences[i]);
    }
    const newProfile = await this.profilesService.create(profile);
    return response.status(HttpStatus.CREATED).json({ newProfile });
  }

  @Get()
  async findAll(@Res() response) {
    const profiles = await this.profilesService.findAll({
      relations: ['gameExperiences'],
    });
    return response.status(HttpStatus.OK).json({ profiles });
  }

  @Get(':id')
  async findById(@Res() response, @Param('id') id) {
    const profile = await this.profilesService.findOne(id, {
      relations: ['gameExperiences'],
    });
    return response.status(HttpStatus.OK).json({ profile });
  }
}
