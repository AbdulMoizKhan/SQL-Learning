import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProgressModule } from './progress/progress.module';
import { User } from './entities/user.entity';
import { Scenario } from './entities/scenario.entity';
import { UserProgress } from './entities/user-progress.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'sql_learning',
      entities: [User, Scenario, UserProgress],
      synchronize: true,
    }),
    AuthModule,
    ProgressModule,
  ],
})
export class AppModule {}
