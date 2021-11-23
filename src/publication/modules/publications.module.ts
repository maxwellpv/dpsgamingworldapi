import { Module } from '@nestjs/common';
import { PublicationsService } from '../services/publications.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publication } from '../domain/entities/publication.entity';
import { PublicationsController } from '../controllers/publications.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Publication])],
  providers: [PublicationsService],
  controllers: [PublicationsController],
})
export class PublicationsModule {}
