import { Injectable } from "@nestjs/common";
import { Task } from "./task.model";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(task: Task): Task {
    const newTask = { ...task, id: String(this.tasks.length + 1) };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, update: Task): Task {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      return null;
    }
    this.tasks[taskIndex] = {...this.tasks[taskIndex], ...update};
    return this.tasks[taskIndex];
  }

  deleteTask(id: string): Task {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      return null
    }
    return this.tasks.splice(taskIndex, 1)[0]
  }
}
