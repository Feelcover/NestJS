import { ArrayNotEmpty, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Status } from '../task.interface';

export class CreateTaskDto {
  @IsString({ message: 'Укажите название задачи' })
  @IsNotEmpty({ message: "Введите название задачи"})
  task: string;

  @ArrayNotEmpty({message: "Укажите теги"})
  @IsString({ each: true, message: 'Неверный тип тегов' })
  tags?: string[];

  @IsOptional()
  @IsEnum(Status, { message: 'Неверный тип статуса' })
  status?: Status;
}
