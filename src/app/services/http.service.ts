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

     // TODO - IMPLEMENT HTTP_INTERCEPTORS
    post(serviceName: string, data: any) {
        const headers = new HttpHeaders();
        const options = { headers: headers, withCredintials: false };
        const url = environment.apiUrl + serviceName;

        return this.http.post(url, JSON.stringify(data), options);
    }
}
