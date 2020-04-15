import { Component, OnInit } from '@angular/core';
import { AuthConstants } from '../config/auth-constant';
import { StorageService } from '../services/storage.service';
import { Constants } from '../config/constants';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  token: string;
  public loginForm: FormGroup;


  constructor(private _storage: StorageService, private CONSTANTS: Constants) { }

  ngOnInit() {

  }


  register(form) {
    // this.authService.register(form.value).subscribe((res) => {
    //   this.router.navigateByUrl('home');
    // });

    console.log('form :', form);

  }

}
