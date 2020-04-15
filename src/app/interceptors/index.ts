import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './TokenInterceptor.service';
import { LoginInterceptorService } from './loginInterceptor.service';
import { ErrorInterceptorService } from './errorInterceptor.service';
import { HttpLoadingInterceptor } from './HttpLoadingInterceptor.service';



export const httpInterceptorsProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpLoadingInterceptor, multi: true },
];

