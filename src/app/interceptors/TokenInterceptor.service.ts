import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constant';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor, CanActivate {
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this._storage
        .get(AuthConstants.TOKEN)
        .then(res => {
          if (res) {
            resolve(true);
            console.log('si hay token ve al home');
          } else {
            this.router.navigate(['login']);
            console.log('no hay token anda al login');
            resolve(false);
          }
        })
        .catch(err => {
          resolve(false);
          console.log('error :', err);
        });
    });

  }


  constructor(private _storage: StorageService, public router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {




    console.log('login from token interceptor');

    const reqClone = req.clone({
      setHeaders: {
        'Accept': 'Application/json',
        'Content-Type': 'Application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

    return next.handle(reqClone);
  }
}
