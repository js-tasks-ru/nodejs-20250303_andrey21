import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: "1",
      title: "Task 1",
      description: "First task",
      status: TaskStatus.PENDING,
    },
    {
      id: "2",
      title: "Task 2",
      description: "Second task",
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: "3",
      title: "Task 3",
      description: "Third task",
      status: TaskStatus.COMPLETED,
    },
    {
      id: "4",
      title: "Task 4",
      description: "Fourth task",
      status: TaskStatus.PENDING,
    },
    {
      id: "5",
      title: "Task 5",
      description: "Fifth task",
      status: TaskStatus.IN_PROGRESS,
    },
  ];

  getFilteredTasks(
    status?: TaskStatus,
    page?: number,
    limit?: number,
  ): Task[] {
    let tasks: Task[] = this.tasks;
    if (status) {
      if (Object.values(TaskStatus).includes(status)) {
        tasks = tasks.filter((task) => task.status === status);
      } else {
        return null;
      }
    }
    if (page) {
      if (page <= tasks.length % 5 + 1) {
        //
      } else {
        return [];
      }
    }
    if (limit) {
      if (limit >= 1) {
        tasks = tasks.slice(0, limit);
      } else {
        return null;
      }
    }
    return tasks;
  }
}
