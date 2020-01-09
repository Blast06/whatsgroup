import { Component, OnInit } from '@angular/core';
import { AuthConstants } from '../config/auth-constant';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  token: string;

  constructor(private _storage: StorageService) { }

  ngOnInit() {
    this._storage.get('TOKEN').then((val) => {
      console.log('Your token is', val);
      this.token = val;
    });

    this._storage.get('REFRESH_TOKEN').then((val) => {
      console.log('Your REFRESH_Token is', val);
      this.token = val;
    });
  }

}
