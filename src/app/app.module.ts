import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { httpInterceptorsProviders } from './interceptors';

import { HttpService } from './services/http.service';
import { StorageService } from './services/storage.service';
import { LoginPageModule } from './login/login.module';
import { AuthService } from './services/auth.service';
import { Storage } from '@capacitor/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ShellModule } from './shell/shell.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot({
      scrollPadding: false,
      scrollAssist: true,
    }),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ShellModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    httpInterceptorsProviders,
    HttpService,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
