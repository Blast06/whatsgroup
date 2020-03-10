import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { StorageService } from '../services/storage.service';
import { Constants } from '../config/constants';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  TOKEN: string;
  profile: any[] = [];
  // tslint:disable-next-line:variable-name
  constructor( private _http: HttpService,
               // tslint:disable-next-line:variable-name
               private _storage: StorageService,
               private CONSTANT: Constants) { }

  ngOnInit() {

    this._storage.get(this.CONSTANT.TOKEN).then( (token) => {

      console.log('token :', token);

    });

    const data1: any = 0;


    this._http.get('api/users/me')
    .then( (data: any) => console.log('data :', data));


  }

}
