import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { ITask } from 'test/task.interface';



@Controller('task')
export class AppController {

 @Get()
 getTasks():ITask[] {
  return this.tasks;
 } 

 @Get(':id')
 getTaskById(@Param("id") id:number):ITask {
  return this.tasks.find(t => t.id === +id);
 }

 @Post()
 createTask(@Body("task") task:ITask):ITask {
  this.tasks.push(task);
  return task;
 }
}
