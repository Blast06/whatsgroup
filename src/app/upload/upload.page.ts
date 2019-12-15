import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthConstants } from '../config/auth-constant';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('TOKEN').then((val) => {
      console.log('Your token is', val);
    });

    this.storage.get('REFRESH_TOKEN').then((val) => {
      console.log('Your REFRESH_Token is', val);
    });
  }

}
