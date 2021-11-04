import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly libraryService: UsersService) {}

  @Post()
  async createUser(@Res() response, @Body() user: User) {
    const newUser = await this.libraryService.createUser(user);
    return response.status(HttpStatus.CREATED).json({ newUser });
  }

  @Get(':/id')
  async findById(@Res() response, @Param('id') id) {
    const user = await this.libraryService.findOne(id);
    return response.status(HttpStatus.OK).json({ user });
  }
}
