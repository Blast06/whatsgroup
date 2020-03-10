import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor, CanActivate {

  token: string;
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this._storage
        .get(this.CONSTANTS.TOKEN)
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


  constructor(private _storage: StorageService, public router: Router, private CONSTANTS: Constants) {


    _storage.get(this.CONSTANTS.TOKEN).then((token: any) => this.token = token);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.CONSTANTS.AUTH_URL) {
       req = req.clone({
        setHeaders: {
          Accept: 'Application/json',
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'Application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        }
      });


    } else {
      console.log('entro aqui token else interceptor');

    }


    return next.handle(req);
  }
}
