import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Isesion } from '../interfaces/isesion';

@Injectable({ 
    providedIn: 'root' 
})

export class BDLocalService {

    sesion: Isesion[]=[];

    private _storage: Storage | null = null;
    constructor(private storage: Storage) {
        this.init();
        this.cargarSesion();
    }

    async init() {
        const storage = await this.storage.create();
        this._storage = storage;
    }

    async cargarSesion() {
        const sesionActual = await this.storage.get('sesion')
        if (sesionActual) {
            this.sesion=sesionActual;
        }
    }

    guardarSesion(username: string) {
        const existe=this.sesion.find(u=>u.strUser===username);
        if (!existe) {
            this.sesion.unshift({strUser: username})
            this.storage.set('sesion', this.sesion);
        }
    }


}
