import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from '../config/auth-constant';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }

 
  login(username: any, password: any): Observable<any> {

    let body = {
      username: username,
      password: password,
      client_secret: environment.client_secret,
      client_id: environment.client_id,
      grant_type: 'password'
  };

    return this.httpService.post('oauth/token', body);
  }
  refreshToken(username: any, password: any): Observable<any> {

    let data = {
      username: username,
      password: password,
      client_secret: environment.client_secret,
      client_id: environment.client_id,
      grant_type: 'refresh_token'
  };

    return this.httpService.post('oauth/token', data);
  }

  signup(postData: any): Observable<any> {
    return this.httpService.post('signup', postData);
  }

  // logout() {
  //   this.storageService.removeStorageItem(AuthConstants.TOKEN).then(res => {
  //     this.router.navigate(['/login']);
  //   });
  // }
}
