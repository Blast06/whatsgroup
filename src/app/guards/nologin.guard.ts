import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {

  constructor(private _auth: AuthService, private route: Router) {

  }

  /// dont show login page when token is stored
  canActivate(): boolean {
    if (this._auth.isAuthenticated()) {
      console.log('this._auth.isAuthenticated :', this._auth.isAuthenticated());
      console.log('entro aqui');
      this.route.navigate(['/list']);
      return false;
    } else {
      return true;
    }
  }
}
