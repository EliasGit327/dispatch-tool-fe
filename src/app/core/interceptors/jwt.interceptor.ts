import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from "../services/user.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.userService.token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.userService.token}` }
      });
    }

    return next.handle(request);
  }
}
