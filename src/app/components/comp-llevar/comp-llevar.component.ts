import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServTellevoService } from 'src/app/serv-tellevo.service';

@Component({
  selector: 'app-comp-llevar',
  templateUrl: './comp-llevar.component.html',
  styleUrls: ['./comp-llevar.component.scss'],
})
export class CompLlevarComponent implements OnInit {
  viaje = {
    id:null,
    viajeId: null,
    hora : "",
    precio : "",
    origen: "",
    destino: ""
  }
  viajes:any;
  cant:any;

  constructor(private api: ServTellevoService, public alertController: AlertController) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.getViajes()
  } 

  getViajes(){
    this.api.getViajes().subscribe(
      (dato)=>{
     
      this.viajes= dato;
      this.cant = this.viajes.length

      console.log(this.viajes.id)
      
    }, (error)=>{
      console.log(error);
    });
  }

  //FUNCIONA!!! necestia al getViajes()
  createViaje(){
      if(this.viaje.hora==undefined){
        this.presentAlert("Seleccione una hora")
        return;
      }
      if (this.viaje.hora!="" && this.viaje.precio!="" && this.viaje.origen!="" && this.viaje.destino!="") {
        this.viaje.viajeId = this.cant + 1;
        this.viaje.id = this.cant + 1
        this.api.createViaje(this.viaje).subscribe(
          ()=>{
            this.presentAlert("Viaje agendado")
            // this.getViajes();
          },
          error=>{
            console.log("Error "+error)
          }
        );
      }else{
        this.presentAlert("Faltan campos por llenar")
      }
    }
    // else{
    //   this.api.updateViaje(this.viaje.viajeId).subscribe(
    //     ()=>{
    //       console.log("Actualizado Correctamente");
    //       // this.getViajes();
    //     },
    //     error=>{
    //       console.log("Error "+error)
    //     }
    //   );
    // }

    //no esta implementada
    limpiar(){
      //así se recorre un Objeto entries y obtengo su clave y valor 
      for(var[key,value] of Object.entries(this.viaje)){
        Object.defineProperty(this.viaje, key,{value:""})
      }
    }

    // mostrar(){
    //   if (this.viaje.viajeId!=0 && this.viaje.hora!="") {
    //     this.presentAlert("Viaje agendado", this.viaje.hora+"hrs")
    //   }else{
    //     this.presentAlert("Viaje no guardado", "Faltan campos por llenar")
    //   }
    // }
    
    async presentAlert(titulo:string){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: titulo,
        buttons: ['OK']
      });
      await alert.present();
    }

}
