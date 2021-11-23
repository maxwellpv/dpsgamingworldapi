import { Injectable } from '@nestjs/common';
import { ExternalAPIServiceInterface } from '../domain/services/external-api.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ExternalAPI } from '../domain/entities/external-api.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExternalAPIService implements ExternalAPIServiceInterface {
  constructor(
    @InjectRepository(ExternalAPI)
    private externalAPIRepository: Repository<ExternalAPI>,
  ) {}

  create(externalAPI: ExternalAPI): Promise<ExternalAPI> {
    return this.externalAPIRepository.save(externalAPI);
  }

  findByAPIName(name: string): Promise<ExternalAPI[]> {
    return this.externalAPIRepository.find({ name });
  }
}
