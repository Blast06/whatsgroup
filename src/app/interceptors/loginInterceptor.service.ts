import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthConstants } from '../config/auth-constant';
@Injectable({
  providedIn: 'root'
})
export class LoginInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // If the url endswith the login url
    if (req.url.endsWith(AuthConstants.AUTH_URL)) {
       req = req.clone({
        setHeaders: {
          'Accept': 'Application/json',
          'Content-Type': 'Application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    console.log('request: ', req.urlWithParams);
    console.log('request: ', req.url);
    console.log('request: ', req.withCredentials);

    return next.handle(req);
  }



}
