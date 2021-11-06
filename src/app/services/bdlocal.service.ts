import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Iusuarios } from '../interfaces/iusuarios';

@Injectable({
  providedIn: 'root'
})
export class BDlocalService {

  userlist: Iusuarios[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
    this.cargarUsuarios();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async cargarUsuarios() {
    const myUserlist= await this.storage.get('usuarios');
    if (myUserlist) {
      this.userlist= myUserlist;
    }
  }
  /*este codigo funciona parcialmente ya que guarda los usuarios sin repetirlos pero a veces
   *borra todos los usuarios y no se por qué :'(
    */
  guardarUsuario(username: string, password: string) {
    //Instrucción LAMBDA
    const existeU= this.userlist.find(u=>u.strUser===username);
    if(!existeU) {
      const existeP= this.userlist.find(p=>p.strPass===password);
      if(!existeP) {
        this.userlist.unshift({strUser: username, strPass: password})
        this.storage.set('usuario', this.userlist)
        console.log('Guardado');
      } else {
        console.log('ya existe');
      }
    }
  }
  /*Este código no funciona, no es capaz de retornar nada desde la base de datos :c
   *
  */
  autenticarUsuario(username: string, password: string) {
    console.log('entrando a autenticar con '+username+' '+password)
    const existeU = this.userlist.find(u=>u.strUser===username);
    const existeP= this.userlist.find(p=>p.strPass===password);
    if(existeU) {
      console.log('usuario encontrado')
      if(existeP) {
        console.log('password encontrada')
        console.log('valida');
        return true;
      } else {
        console.log('no valida');
        return false;
      }
    } else {
      console.log('fallo')
    }
  }
}
