import { Status } from '../task.interface';

export class CreateTaskDto {
  task: string;
  tags?: string[];
  status?: Status;
}
