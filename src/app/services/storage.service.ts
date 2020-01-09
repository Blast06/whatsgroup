import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
const { Storage } = Plugins;
@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor(private platform: Platform,
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
    }
    addCredentials(username: string, password: string, token: string, refreshToken: string) {

        console.log('guardando aqui..');
        this.store(AuthConstants.USERNAME, username);
        this.store(AuthConstants.PASSWORD, password);
        this.store(AuthConstants.TOKEN, token);
        this.store(AuthConstants.REFRESH_TOKEN, refreshToken);
    }
}
