import { Module } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TaskController } from "./tasks.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TasksService],
})
export class TasksModule {}
