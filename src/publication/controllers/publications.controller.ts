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
import { PublicationsService } from '../services/publications.service';
import { Publication } from '../entities/publication.entity';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationService: PublicationsService) {}
  @Post()
  async createBook(@Res() response, @Body() publication: Publication) {
    const newPublication = await this.publicationService.createPublication(
      publication,
    );
    return response.status(HttpStatus.CREATED).json({ newPublication });
  }
  @Get()
  async findAll(@Res() response) {
    const publications = await this.publicationService.findAll();
    return response.status(HttpStatus.CREATED).json({ publications });
  }
  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const publication = await this.publicationService.findOne(id);
    return response.status(HttpStatus.CREATED).json({ publication });
  }
  @Put('/:id')
  async updateById(
    @Res() response,
    @Body() publication: Publication,
    @Param('id') id,
  ) {
    const updateResult = await this.publicationService.updatePublication(
      id,
      publication,
    );
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }
}
