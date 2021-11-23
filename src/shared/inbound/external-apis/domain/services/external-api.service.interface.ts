import { Profile } from '../../../../../profile/domain/entities/profile.entity';
import { FindOneOptions } from 'typeorm';
import { ExternalAPI } from '../entities/external-api.entity';

export interface ExternalAPIServiceInterface {
  findByAPIName(name: string): Promise<ExternalAPI[]>;

  create(externalAPI: ExternalAPI): Promise<ExternalAPI>;
}
