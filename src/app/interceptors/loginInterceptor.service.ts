import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Constants } from '../config/constants';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class LoginInterceptorService implements HttpInterceptor {

  token: string;
  constructor(private CONSTANTS: Constants, private _storage: StorageService) {


    _storage.get(CONSTANTS.TOKEN).then( (token: any) => this.token = token);

   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('req.url :', req.url);
    // If the url endswith the login url
    if (req.url.endsWith(this.CONSTANTS.AUTH_URL)) {
       console.log('this.token :', this.token);
       req = req.clone({
        setHeaders: {
          Accept: 'Application/json',
          'Content-Type': 'Application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        }
      });
    } else {
      console.log('entro aqui en login interceptor');
      console.log('this.token :', this.token);
      req = req.clone({
        setHeaders: {
          Accept: 'Application/json',
          'Content-Type': 'Application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Authorization: `Bearer ${this.token}`

        }
      });

    }

    // console.log('request: ', req.urlWithParams);
    // console.log('request: ', req.url);
    console.log('request: ', req.withCredentials);

    return next.handle(req);
  }



}
