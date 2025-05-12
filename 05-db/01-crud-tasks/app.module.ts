import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./tasks/entities/task.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "sqlite", // Тип базы данных
    database: "db.sqlite", // Файл базы данных
    entities: [Task], // Список сущностей
    synchronize: true, // Автоматическое создание таблиц (не использовать в продакшене)
  }), TasksModule],
})
export class AppModule {}
