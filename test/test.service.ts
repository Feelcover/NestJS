import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
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

  getTaskById(id: number): ITask {
    const task = this.tasks.find((t) => t.id === +id);
    return task;
  }
}
