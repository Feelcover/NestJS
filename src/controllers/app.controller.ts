import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
 @Get()
 test(){
  return {result: "Всё работает", status:200}
 }
}
