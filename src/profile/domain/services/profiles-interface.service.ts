import { Profile } from '../entities/profile.entity';
import { FindOneOptions, Repository } from 'typeorm';

export interface ProfilesInterfaceService {
  findAll(options?: object): Promise<Profile[]>;

  findOne(id: string, options?: FindOneOptions<Profile>): Promise<Profile>;

  create(profile: Profile): Promise<Profile>;
}
