import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';


import { map, catchError, finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { retryWhen } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {


    activeRequests: number = 0;

    constructor(private http: HttpClient, private loadingCtrl: LoadingController, private loadingScreenService: LoadingService) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.activeRequests === 0) {
            this.loadingScreenService.startLoading();
        }

        this.activeRequests++;
        console.log('fdisjaifodjsoaifjdosjfos6');


        return next.handle(request).pipe(
            finalize(() => {
                this.activeRequests--;
                if (this.activeRequests === 0) {
                    this.loadingScreenService.stopLoading();
                }
            })
        );
    }
}
