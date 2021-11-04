import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.entity';

@Controller('profile')
export class ProfileController {
  constructor(private readonly libraryService: ProfileService) {}

  @Post()
  async createProfile(@Res() response, @Body() profile: Profile) {
    const newProfile = await this.libraryService.createProfile(profile);
    return response.status(HttpStatus.CREATED).json({ newProfile });
  }

  @Get(':/id')
  async findById(@Res() response, @Param('id') id) {
    const profile = await this.libraryService.findOne(id);
    return response.status(HttpStatus.OK).json({ profile });
  }
}
