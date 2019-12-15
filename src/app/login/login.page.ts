import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../services/http.service';
// import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public signUpForm: FormGroup;

  public signUpData = {
    name: '',
    email: '',
    password: ''
  };

  public postData = {
    username: '',
    password: ''
  };
  signupView = false;
  constructor(private _auth: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
               ) {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  toggleSignUpView() {
    this.signupView = !this.signupView;
  }
  ngOnInit() {
  }

  logForm() {
    console.log(this.loginForm.value.username, this.loginForm.value.password);
    // this._auth.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
    //   (res: any) => {
    //     if (res.access_token) {
          // if (this.platform.is('mobileweb')) {
          //   console.log('guardando aqui..');
          //   this.storage.set('TOKEN', res.access_token);
          //   this.storage.set('EFRESH_TOKEN', res.refresh_token);
          // } else {
          //   this._storage.store(AuthConstants.TOKEN, res.access_token);
          //   this._storage.store(AuthConstants.REFRESH_TOKEN, res.refresh_token);
          // }

          // adding credentials to the storage
          // this._storage.addCredentials(this.loginForm.value.username, this.loginForm.value.password, 
          //   res.access_token, res.refresh_token);

          // this.router.navigate(['home/feed']); ir al inicio
          // console.log('login credentials: ', res);
        // }
    //   }
    // );



  }

  login() {
    console.log(this.loginForm.value.username, this.loginForm.value.password);
    // this._auth.login(this.loginForm.value).subscribe();
  }

}
