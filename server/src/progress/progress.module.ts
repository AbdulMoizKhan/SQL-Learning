import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';
import { UserProgress } from '../entities/user-progress.entity';
import { Scenario } from '../entities/scenario.entity';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserProgress, Scenario, User])],
  providers: [ProgressService],
  controllers: [ProgressController],
})
export class ProgressModule {}
