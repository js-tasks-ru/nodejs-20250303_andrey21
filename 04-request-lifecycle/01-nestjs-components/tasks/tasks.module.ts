import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
import { LoggingMiddleware } from "../middlewares/logging.middleware";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ApiVersionInterceptor } from "../interceptors/api-version.interceptor";

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService,  {
    provide: APP_INTERCEPTOR,
    useClass: ApiVersionInterceptor,
  },
  ],
})
export class TasksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes("tasks");
  }
}
