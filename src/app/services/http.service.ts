import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    /**
     *
     * @param serviceName the name of every route - method in the backend
     * @param data the data type that will be returned
     *
     * How this exactly work?
     * a name of every routename(serviceName) is gonna be passed to be added at the end of the main URL(the only thing that does not change)
     * and the data type that will be returned
     */
    post(serviceName: string, data: any) {
        const url = environment.apiUrl + serviceName;

        return this.http.post(url,  JSON.stringify(data));
    }

    get(serviceName: string, data: any) {
        const url = environment.apiUrl + serviceName;

        return this.http.get(url, data);
    }
}
