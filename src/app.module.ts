import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/task.entity';
import { TaskModule } from './task/task.module';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'nest',
      database: 'nest',
      synchronize: true,
      entities: [ Task, User ]
    }),
    TaskModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
