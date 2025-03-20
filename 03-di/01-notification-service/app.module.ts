import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { ConfigModule } from '@nestjs/config';
import configuration from './config/config';

@Module({
  imports: [TasksModule, ConfigModule.forRoot({
    load: [configuration],
  })],
})
export class AppModule {}
