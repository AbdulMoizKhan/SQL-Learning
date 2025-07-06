import { User } from './user.entity';
import { Scenario } from './scenario.entity';
export declare class UserProgress {
    id: string;
    user: User;
    scenario: Scenario;
    userQuery: string;
    isCorrect: boolean;
    attemptedAt: Date;
}
