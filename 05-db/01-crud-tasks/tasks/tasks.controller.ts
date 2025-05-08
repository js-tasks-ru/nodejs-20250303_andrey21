import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from "@nestjs/common";
import { Task } from "./entities/task.entity";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TaskController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() task: Partial<Task>): Promise<Task> {
    return this.taskService.create(task);
  }

  @Patch(":id")
  update(@Param("id") id: number, @Body() task: Partial<Task>): Promise<Task> {
    return this.taskService.update(id, task);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.taskService.remove(id);
  }
}
