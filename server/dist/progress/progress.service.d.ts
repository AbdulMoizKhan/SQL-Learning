import { Repository } from 'typeorm';
import { UserProgress } from '../entities/user-progress.entity';
import { Scenario } from '../entities/scenario.entity';
import { User } from '../entities/user.entity';
export declare class ProgressService {
    private progressRepo;
    private scenarioRepo;
    private userRepo;
    constructor(progressRepo: Repository<UserProgress>, scenarioRepo: Repository<Scenario>, userRepo: Repository<User>);
    saveProgress(userId: string, scenarioId: string, userQuery: string, isCorrect: boolean): Promise<UserProgress>;
    getProgress(userId: string): Promise<UserProgress[]>;
}
