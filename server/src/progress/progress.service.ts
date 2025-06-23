import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProgress } from '../entities/user-progress.entity';
import { Scenario } from '../entities/scenario.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(UserProgress) private progressRepo: Repository<UserProgress>,
    @InjectRepository(Scenario) private scenarioRepo: Repository<Scenario>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async saveProgress(userId: string, scenarioId: string, userQuery: string, isCorrect: boolean) {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    const scenario = await this.scenarioRepo.findOne({ where: { id: scenarioId } });
    const progress = this.progressRepo.create({ user, scenario, userQuery, isCorrect });
    return this.progressRepo.save(progress);
  }

  async getProgress(userId: string) {
    return this.progressRepo.find({ where: { user: { id: userId } }, relations: ['scenario'] });
  }
}
