import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from '../config/auth-constant';
import { environment } from '../../environments/environment';
import { LoginPageModule } from '../login/login.module';
import { Constants } from '../config/constants';
import { Plugins } from '@capacitor/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Events, Platform } from '@ionic/angular';


const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private CONSTANTS: Constants,
    private _storage: StorageService,
    private _auth: AuthService,

    private router: Router,
    private events: Events,
    private plt: Platform
  ) {
  }

  login(username: any, password: any) {

    let body = {
      username: username,
      password: password,
      client_secret: environment.client_secret,
      client_id: environment.client_id,
      grant_type: 'password'
    };

    this.authState.next(true);
    return this.httpService.post('oauth/token', body);
  }
  refreshToken(username: any, password: any) {

    const data = {
      username: username,
      password: password,
      client_secret: environment.client_secret,
      client_id: environment.client_id,
      grant_type: 'refresh_token'
    };

    return this.httpService.post('oauth/token', data);
  }

  signup(nameField: string, emailField: string, passwordField: string, passwordConfirmationField: string) {
    const data = {
      name: nameField,
      email: emailField,
      password: passwordField,
      password_confirmation: passwordConfirmationField
    };
    return this.httpService.post('api/auth/signup', data);
  }

  logout() {
    this.storageService.removeStorageItem(this.CONSTANTS.TOKEN).then(res => {
      this.authState.next(false);
      this.router.navigate(['/home']);
      this.events.publish('user:menu');
      console.log('res :', res);
    });
  }

  ifLoggedIn(): Observable<boolean> {
    console.log('aqui esta fsdafsda', this.authState.asObservable());
    return this.authState.asObservable();
  }

  isAuthenticated() {
    console.log('this.authState.value :', this.authState.value);
    return this.authState.value;
  }

   hasToken(): boolean {
    let res: boolean;
    this._storage.get(this.CONSTANTS.TOKEN).then((response) => {
      if (response) {
        res = response;
        console.log('response :', response);
        console.log('this.authState.value :', this.authState.value);
        this.authState.next(true);
        console.log('resp', response);

      }
    });
    console.log('res', !!res);
    return !!res;
  }
}
