import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalAPI } from '../domain/entities/external-api.entity';
import { ExternalAPIService } from '../services/external-api.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExternalAPI])],
  providers: [ExternalAPIService],
  exports: [TypeOrmModule],
})
export class ExternalAPIModule {}
