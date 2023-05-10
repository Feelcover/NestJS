import { Body, Controller, Get, Param, Post} from '@nestjs/common';
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
 getTaskById(@Param("id") id:string):ITask {
  return this.testService.getTaskById(id);
 }

 @Post()
 createTask(@Body() task:CreateTaskDto):ITask {
  return this.testService.createTask(task);
 }
}
