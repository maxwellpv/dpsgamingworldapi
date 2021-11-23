import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from '../domain/entities/profile.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { ProfilesInterfaceService } from '../domain/services/profiles-interface.service';

@Injectable()
export class ProfilesService implements ProfilesInterfaceService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  findAll(options?: object): Promise<Profile[]> {
    return this.profileRepository.find(options);
  }

  findOne(id: string, options?: FindOneOptions<Profile>): Promise<Profile> {
    return this.profileRepository.findOne(id, options);
  }

  create(profile: Profile): Promise<Profile> {
    return this.profileRepository.save(profile);
  }
  async updateProfile(id: string, profile: Profile): Promise<Profile> {
    const todo = await this.profileRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.profileRepository.update(id, profile);
    return await this.profileRepository.findOne(id);
  }
}
