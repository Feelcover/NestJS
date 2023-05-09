import { Injectable} from '@nestjs/common';
import { ITask } from './task.interface';

@Injectable()
export class TestService {
  private tasks: ITask[] = [
    { id: 1, task: 'task1' },
    { id: 2, task: 'task2' },
  ];

  getTasks(): ITask[] {
    return this.tasks;
  }

  getTaskById(id: string): ITask {
    const task = this.tasks.find((t) => t.id === +id);
    return task;
  }

  createTask(task:ITask):ITask {
    this.tasks.push(task);
    return task;
   }
}
