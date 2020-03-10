import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient, private http2: HTTP) {

        http2.setDataSerializer('json');
     }

    /**
     *
     * @param serviceName the name of every route - method in the backend
     * @param data the data type that will be returned
     *
     * How this exactly works?
     * a name of every routename(serviceName) is gonna be passed to be added at the end of the main URL(the only thing that does not change)
     * and the data type that will be returned
     */
    post(serviceName: string, data?: any) {
        const url = environment.apiUrl + serviceName;

        return this.http2.post(url,  data, {});
        
    }

    get(serviceName: string, data?: any, headers?) {
        const url = environment.apiUrl + serviceName;

        return this.http2.get(url, data, headers);
    }
}
