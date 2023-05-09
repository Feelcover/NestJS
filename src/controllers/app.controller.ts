import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { ITask } from 'test/task.interface';



@Controller('task')
export class AppController {
  private tasks: ITask[] = [
    {id:1, task: 'task1'},
    {id:2, task: 'task2'},
  ];
 @Get()
 getTasks(){
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
