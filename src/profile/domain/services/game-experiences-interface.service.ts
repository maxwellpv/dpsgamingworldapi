import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameExperience } from '../entities/game-experience.entity';

export interface GameExperiencesInterfaceService {
  create(gameExperience: GameExperience): Promise<GameExperience>;

  findAll(): Promise<GameExperience[]>;

  findOne(id: number): Promise<GameExperience>;
}
