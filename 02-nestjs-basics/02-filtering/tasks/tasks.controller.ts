import { Controller, Get, NotFoundException, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TaskStatus } from "./task.model";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(
    @Query("status") status?: TaskStatus,
    @Query("page") page?: number,
    @Query("limit") limit?: number,
  ) {
    const res = this.tasksService.getFilteredTasks(status, page, limit);
    if (res === null) throw new NotFoundException('400');
    return res;
  }
}
