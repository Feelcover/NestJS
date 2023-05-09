import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { ITask } from 'test/task.interface';
import { TestService } from 'test/test.service';



@Controller('task')
export class AppController {
  constructor (private testService: TestService ) {}

 @Get()
 getTasks():ITask[] {
  return this.testService.getTasks();
 } 

 @Get(':id')
 getTaskById(@Param("id") id:string):ITask {
  return this.testService.getTaskById(id);
 }

 @Post()
 createTask(@Body("task") task:ITask):ITask {
  return this.testService.createTask(task);
 }
}
