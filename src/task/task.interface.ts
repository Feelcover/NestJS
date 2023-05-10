export enum Status {
  CREATE = 'created',
  PROCESSING = 'processing',
  ABORT = 'abort',
  ERROR = 'error',
  DONE = 'done',
}
export interface ITask {
  id: number;
  task: string;
  status: Status;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
