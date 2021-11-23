import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { NewsService } from '../services/news.service';

@ApiTags('news')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get(':theme')
  async findById(@Res() response, @Param('theme') theme) {
    const news = await this.newsService.findByTheme(theme);
    return response.status(HttpStatus.OK).json({ news });
  }
}
