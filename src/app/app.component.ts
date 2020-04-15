import { Component } from '@angular/core';

import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Plugins } from '@capacitor/core';
import { Constants } from './config/constants';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

const { Storage } = Plugins;
const { AdMob } = Plugins;






@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  pages: Array<{ title: string, url: string, icon: string }>;
  token: string;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Busca por pais',
      url: '/chooser',
      icon: 'list'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle-outline'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events: Events,
    private CONSTANTS: Constants,
    // tslint:disable-next-line:variable-name
    private _storage: StorageService,
    // tslint:disable-next-line:variable-name
    private _auth: AuthService,
    private router: Router
  ) {
    AdMob.initialize();

    this.initializeApp();

    this.update_menu();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffce00');
      this.splashScreen.hide();

      console.log('isAuthenticated');
      console.log(this._auth.isAuthenticated());


    });
  }

  update_menu() {


    this._auth.ifLoggedIn().subscribe( (res: any) => {

      if (res) {
        this.appPages = [
          {
            title: 'Home',
            url: '/home',
            icon: 'home'
          },
          {
            title: 'Buscar',
            url: '/chooser',
            icon: 'list'
          },
          {
            title: 'About',
            url: '/about',
            icon: 'information-circle-outline'
          },
          {
            title: 'Subir grupo',
            url: '/upload',
            icon: 'cloud-upload'
          },
          {
            title: 'Salir',
            url: '/logout',
            icon: 'log-out'
          }
        ];
      } else {
        this.appPages = [
          {
            title: 'Login',
            url: '/login',
            icon: 'log-in'
          },
          {
            title: 'Home',
            url: '/home',
            icon: 'home'
          },
          {
            title: 'Buscar',
            url: '/chooser',
            icon: 'list'
          },
          {
            title: 'About',
            url: '/about',
            icon: 'information-circle-outline'
          },
        ];
      }
    });

  }

}
