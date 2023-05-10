import { ITask, Status } from './task.interface';

export class Task implements ITask {
  task: string;
  id = new Date().getTime();
  status: Status;
  tags: string[];
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  constructor(task: string) {
    this.task = task;
  }
}
