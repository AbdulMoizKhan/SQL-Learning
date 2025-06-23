import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProgressService } from './progress.service';

@Controller('progress')
export class ProgressController {
  constructor(private progressService: ProgressService) {}

  @Post()
  async save(@Body() body: { userId: string; scenarioId: string; userQuery: string; isCorrect: boolean }) {
    return this.progressService.saveProgress(body.userId, body.scenarioId, body.userQuery, body.isCorrect);
  }

  @Get(':userId')
  async get(@Param('userId') userId: string) {
    return this.progressService.getProgress(userId);
  }
}
