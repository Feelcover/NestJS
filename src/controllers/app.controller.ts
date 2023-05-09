import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { Task } from 'test/task.interface';



@Controller('task')
export class AppController {
  private tasks: Task[] = [
    {id:1, task: 'task1'},
    {id:2, task: 'task2'},
  ];
 @Get()
 getTasks(){
  return this.tasks;
 } 

 @Get(':id')
 getTaskById(@Param("id") id:number):Task {
  return this.tasks.find(t => t.id === +id);
 }

 @Post()
 createTask(@Body("task") task:Task):Task {
  this.tasks.push(task);
  return task;
 }
}
