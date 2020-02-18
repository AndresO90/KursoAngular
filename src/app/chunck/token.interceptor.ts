import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = this.auth.getToken();
    const token = sessionStorage.getItem('token');
    console.log('TOKEN DESDE INTERCEPTOR :', token);
    const authReq = req.clone(
      {headers: req.headers.set('Authorization', 'Bearer ' + token)}
      );
    return next.handle(authReq);
  }
}
