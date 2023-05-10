import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Status } from '../task.interface';

export class CreateTaskDto {
  @IsString({ message: 'Укажите название задачи' })
  task: string;

  @IsOptional()
  @IsString({ each: true, message: 'Неверный тип тегов' })
  tags?: string[];

  @IsOptional()
  @IsEnum(Status, { message: 'Неверный тип статуса' })
  status?: Status;
}
