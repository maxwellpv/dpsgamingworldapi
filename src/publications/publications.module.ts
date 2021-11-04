import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publication } from './publication.entity';
import { PublicationsController } from './publications.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Publication])],
  providers: [PublicationsService],
  controllers: [PublicationsController],
})
export class PublicationsModule {}
