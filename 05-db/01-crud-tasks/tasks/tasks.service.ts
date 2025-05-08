import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "./entities/task.entity";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) throw new NotFoundException('Not Found');
    return task;
  }

  create(newTask: Partial<Task>): Promise<Task> {
    const task = new Task();

    task.description = newTask.description;
    task.title = newTask.title;

    return this.taskRepository.save(task);
  }

  async update(id: number, task: Partial<Task>): Promise<Task> {
    await this.taskRepository.update(id, task);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) throw new NotFoundException('Not Found');
    await this.taskRepository.delete(id);
  }
}
