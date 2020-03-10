import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  // tslint:disable-next-line:variable-name
  constructor( private _auth: AuthService, private route: Router) { }

  canActivate(): boolean {
    if (this._auth.isAuthenticated()) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }

  }
}
