import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { NotFoundTask } from './exceptions/notFound.exceptions';
import { Task } from './task.entity';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  getTasks(): ITask[] {
    return this.tasks;
  }

  getTaskById(id: string): ITask {
    const task = this.tasks.find((t) => t.id === +id);
    if (!task) {
      throw new NotFoundTask({code:"error"});
    }
    return task;
  }

  createTask({ task, tags, status }: CreateTaskDto): ITask {
    const newTask = new Task(task, tags, status);
    this.tasks.push(newTask);
    return newTask;
  }
}
