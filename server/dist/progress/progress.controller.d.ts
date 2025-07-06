import { ProgressService } from './progress.service';
export declare class ProgressController {
    private progressService;
    constructor(progressService: ProgressService);
    save(body: {
        userId: string;
        scenarioId: string;
        userQuery: string;
        isCorrect: boolean;
    }): Promise<import("../entities/user-progress.entity").UserProgress>;
    get(userId: string): Promise<import("../entities/user-progress.entity").UserProgress[]>;
}
