import { CanActivate, ExecutionContext } from "@nestjs/common";

export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const userRole = request.headers["x-role"];
    return userRole === "admin";
  };
}
