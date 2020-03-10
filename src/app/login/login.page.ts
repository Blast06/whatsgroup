import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../services/http.service';

// capacitor plugins

import { Plugins, KeyboardInfo } from '@capacitor/core';
import { IonInput, Events } from '@ionic/angular';
import { debug } from 'util';

const { Keyboard } = Plugins;




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  @ViewChild('myUser', {static: false}) myUser: IonInput;
  @ViewChild('myPassword', {static: false}) myPassword: IonInput;

  public data = {
    headerTitle: 'Login',
    title: 'Login',
    subTitle: 'Whatsgroup',
    email: ' myemail@gmail.com',
    labelUsername: 'yourusername',
    labelPassword: 'julio',
    errorUser: 'Email Address is not Valid',
    errorPassword: 'Password is not Valid',
    loginButton: 'Login',
    signup: 'Signup',
    login: 'Login',
    resetPassword: 'Reset Password',
  };

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
              private _storage: StorageService,
              private events: Events ) {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
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
    this._auth.login(this.loginForm.value.username, this.loginForm.value.password).then(
      (data: any) => {
        console.log('aqui entro en res');
        console.log('data => ', JSON.stringify(data));
        console.log(data.status);
        console.log(data.data);
        console.log(data.headers);
        
        // debugger
        // if (res.access_token) {
        //   this._storage.addCredentials(this.loginForm.value.username, this.loginForm.value.password,
        //     res.access_token, res.refresh_token);
        //   console.log('login credentials: ', res);
        //   this._auth.authState.next(true);
        // }
      }

    )
    .catch( error => {
      console.log('error:', error);
      // console.log(error.status);
      // console.log(error.error); 
      // console.log(error.headers);
    });

  }

// Keyboard.addListener('keyboardWillShow', (info: KeyboardInfo) => {
//   Keyboard.setScroll({ isDisabled: false});
//   console.log('keyboard will show with height', info.keyboardHeight);
// });

// Keyboard.addListener('keyboardDidShow', (info: KeyboardInfo) => {
//   console.log('keyboard did show with height', info.keyboardHeight);
// });

// Keyboard.addListener('keyboardWillHide', () => {
//   console.log('keyboard will hide');
// });

// Keyboard.addListener('keyboardDidHide', () => {
//   console.log('keyboard did hide');
// });
}
