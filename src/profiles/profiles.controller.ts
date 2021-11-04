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

@ApiTags('profile')
@Controller('profile')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  async createProfile(@Res() response, @Body() profile: Profile) {
    const newProfile = await this.profilesService.createProfile(profile);
    return response.status(HttpStatus.CREATED).json({ newProfile });
  }

  @Get(':id')
  async findById(@Res() response, @Param('id') id) {
    const profile = await this.profilesService.findOne(id);
    return response.status(HttpStatus.OK).json({ profile });
  }
}
