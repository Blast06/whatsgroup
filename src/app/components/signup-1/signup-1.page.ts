import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';
import { Router, Event } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Events } from '@ionic/angular';
import { Login } from '../../models/login';


@Component({
    selector: 'signup-page',
    templateUrl: 'signup-1.page.html',
    styleUrls: ['signup-1.page.scss'],
})
export class SignupPage implements OnChanges {

    public loginForm: FormGroup;
    public signUpForm: FormGroup;
    public signup = false;



    @Input() data: any;
    @Output() onLogin = new EventEmitter();
    @Output() onSignUp = new EventEmitter();
    @Output() onResetPassword = new EventEmitter();



    public isUsernameValid = true;
    public isPasswordValid = true;

    constructor(private _storage: StorageService,
                private _auth: AuthService,
                private router: Router,
                private formBuilder: FormBuilder,
                public events: Events ) {

        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(4), Validators.email]],
            password: ['', [Validators.required, Validators.minLength(4)]],
        });

        this.signUpForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(4)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(4)]],
            passwordConfirmation: ['', [Validators.required]]
        });


    }




    ngOnChanges(changes: { [propKey: string]: any }) {
        this.data = changes['data'].currentValue;


        console.log('this.signUpForm.value :', this.signUpForm);

        this.signUpForm.valueChanges.subscribe((res: any) => {
            console.log('res :', res);

        });
    }

    logForm() {

        console.log('this.user :', this.loginForm.value);
        this._auth.login(this.loginForm.value.username, this.loginForm.value.password).then(
            (data: any) => {
                console.log('aqui entro en res');
                console.log(data.status);
                console.log(JSON.parse(data.data));
                const loginData = JSON.parse(data.data);
                console.log('loginData :', loginData);
                console.log('access_token :', loginData.access_token);
                console.log('expires_in :', loginData.expires_in);
                console.log('refresh_token :', loginData.refresh_token);
                if (loginData.access_token) {
                    this._storage.addCredentials(this.loginForm.value.username, this.loginForm.value.password,
                        loginData.access_token, loginData.refresh_token);
                    this.events.publish('user:menu');
                    this.router.navigateByUrl('list');
                }
            }
        ).catch( error => {
            console.log('error:', error);
            console.log(error.status);
            console.log(error.error);
            const er = JSON.parse(error.error);
            console.log('er :', er);
            // console.log(error.headers);
          });

    }

    registerForm() {
        console.log('this.signUpForm :', this.signUpForm);
        this._auth.signup(this.signUpForm.value.username,
                        this.signUpForm.value.email,
                        this.signUpForm.value.password,
                        this.signUpForm.value.passwordConfirmation).then( (res: any) => console.log('res :', JSON.parse(res)));

    }

    onLoginFunc() {
        this.signup = !this.signup; // ir al inicio
        this.data.headerTitle = 'Login';
    }

    onSignUpFunc() {
        if (event) {
            event.stopPropagation();
        }
        // this.onSignUp.emit(this.item);

        this.signup = !this.signup; // ir al inicio
        this.data.headerTitle = 'Sign up';
        this.data.title = 'Sign up';
        this.data.loginButton = 'Sign up';


    }

    onResetPasswordFunc() {
        if (event) {
            event.stopPropagation();
        }
    }

}
