import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
              private _storage: StorageService,
              private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    this.signUpForm = this.formBuilder.group({
      name : ['', [Validators.required, Validators.minLength(4)]],
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
    console.log(this.loginForm.value);
  }

}
