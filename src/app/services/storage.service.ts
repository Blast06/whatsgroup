import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform, Events } from '@ionic/angular';
import { Constants } from '../config/constants';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

const { Storage } = Plugins;
@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor(private platform: Platform,
                private constant: Constants,
                private events: Events,
                private router: Router,
                
    ) { }

    // Store the value
    async store(storageKey: string, value: any) {
        const encryptedValue = btoa(escape(JSON.stringify(value)));
        await Storage.set({
            key: storageKey,
            value: encryptedValue
        });
    }

    // Get the value
    async get(storageKey: string) {
        const ret = await Storage.get({ key: storageKey });
        return JSON.parse(unescape(atob(ret.value)));
    }

    async removeStorageItem(storageKey: string) {
        await Storage.remove({ key: storageKey });
    }

    // Clear storage
    async clear() {
        await Storage.clear();
        this.events.publish('user:menu');
    }
    addCredentials(username: string, password: string, token: string, refreshToken: string) {

        console.log('guardando aqui..');
        this.store(this.constant.USERNAME, username);
        this.store(this.constant.PASSWORD, password);
        this.store(this.constant.TOKEN, token);
        this.store(this.constant.REFRESH_TOKEN, refreshToken);

    }
}
