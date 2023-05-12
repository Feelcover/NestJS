import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { ITask } from './task.interface';
import { TaskService } from './task.service';



@Controller('task')
export class TaskController {
  constructor (private testService: TaskService ) {}

 @Get()
 getTasks():ITask[] {
  return this.testService.getTasks();
 } 

 @Get(':id')
 getTaskById(@Param("id", ParseIntPipe) id:number):ITask {
  return this.testService.getTaskById(id);
 }

 @UsePipes(new ValidationPipe())
 @Post()
 createTask(@Body() task:CreateTaskDto):ITask {
  return this.testService.createTask(task);
 }
}
