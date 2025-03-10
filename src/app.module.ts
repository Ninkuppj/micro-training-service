import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CourseModule } from './modules/course/course.module';

@Module({
  imports: [CourseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
