"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_progress_entity_1 = require("../entities/user-progress.entity");
const scenario_entity_1 = require("../entities/scenario.entity");
const user_entity_1 = require("../entities/user.entity");
let ProgressService = class ProgressService {
    constructor(progressRepo, scenarioRepo, userRepo) {
        this.progressRepo = progressRepo;
        this.scenarioRepo = scenarioRepo;
        this.userRepo = userRepo;
    }
    async saveProgress(userId, scenarioId, userQuery, isCorrect) {
        const user = await this.userRepo.findOne({ where: { id: userId } });
        const scenario = await this.scenarioRepo.findOne({ where: { id: scenarioId } });
        const progress = this.progressRepo.create({ user, scenario, userQuery, isCorrect });
        return this.progressRepo.save(progress);
    }
    async getProgress(userId) {
        return this.progressRepo.find({ where: { user: { id: userId } }, relations: ['scenario'] });
    }
};
exports.ProgressService = ProgressService;
exports.ProgressService = ProgressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_progress_entity_1.UserProgress)),
    __param(1, (0, typeorm_1.InjectRepository)(scenario_entity_1.Scenario)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProgressService);
//# sourceMappingURL=progress.service.js.map