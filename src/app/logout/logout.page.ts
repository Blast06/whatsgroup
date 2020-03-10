import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  txt: string;
  constructor(private _storage: StorageService, private router: Router, private events: Events, private _auth: AuthService) { 
    _auth.logout();
  }

  ngOnInit() {
  }

}
