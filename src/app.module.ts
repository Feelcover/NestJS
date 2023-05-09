import { Module } from '@nestjs/common';
import { TestService } from 'test/test.service';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [TestService],
})
export class AppModule {}
