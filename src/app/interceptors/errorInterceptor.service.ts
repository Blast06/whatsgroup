import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthConstants } from '../config/auth-constant';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private platform: Platform) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if (req.url.endsWith(AuthConstants.AUTH_URL)) {
    //    req = req.clone({
    //     setHeaders: {
    //       'Accept': 'Application/json',
    //       'Content-Type': 'Application/json',
    //       'Access-Control-Allow-Origin': '*'
    //     }
    //   });
    // }

    // TODO SI EL ERROR ES 401, MANDA EL REFRESH TOKEN
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {

          if (error.status === 401) {
            console.log('error 401', error.status);

            if (this.platform.is('mobileweb')) {
              console.log('es movil');
            }

          }
          // server-side error
          // console.log('error 1', error);
          return throwError(error.status);
        } else {
          console.log('error 2', error);
          // client-side error
          return throwError(error);
        }
      })
    );
  }

}
