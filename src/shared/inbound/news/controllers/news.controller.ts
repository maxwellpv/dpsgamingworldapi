import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { NewsService } from '../services/news.service';

@ApiTags('news')
@Controller('api/v1/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('')
  async findById(@Res() response, @Query('theme') theme: string) {
    const news = await this.newsService.findByTheme(theme);
    return response.status(HttpStatus.OK).json(news);
  }
}
