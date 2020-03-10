import { Component, OnInit } from '@angular/core';
import { AuthConstants } from '../config/auth-constant';
import { StorageService } from '../services/storage.service';
import { Constants } from '../config/constants';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  token: string;

  constructor(private _storage: StorageService, private CONSTANTS: Constants) { }

  ngOnInit() {
    this._storage.get(this.CONSTANTS.TOKEN).then((val) => {
      console.log('Your token is', val);
      this.token = val;
    });

  }

}
