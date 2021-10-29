import { Component, OnInit } from '@angular/core';
import { ServTellevoService } from 'src/app/serv-tellevo.service';

@Component({
  selector: 'app-comp-viajar',
  templateUrl: './comp-viajar.component.html',
  styleUrls: ['./comp-viajar.component.scss'],
})
export class CompViajarComponent implements OnInit{
  viajes:any;

  constructor(private api: ServTellevoService) { }
  
  ngOnInit(){}

  ionViewWillEnter(){
    this.getViajes()
  }

  getViajes(){
    this.api.getViajes().subscribe((dato)=>{
      console.log('Lista viajes');
      console.log(dato);
      
      this.viajes=dato;
    });
  }

  // getViaje(viajeId){
  //   this.api.getViaje(viajeId).subscribe((dato)=>{
  //     this.viaje=dato;
  //   });
  // }

  // guardarViaje(){
  //   if(this.viaje.viajeId==null){
  //     if(this.viaje==undefined){
  //       console.log("Seleccione un viaje");
  //       return;
  //     }
  //     this.viaje.viajeId=this.viaje.viajeId;
  //     this.api.createViaje(this.viaje).subscribe(
  //       ()=>{
  //         console.log("Creado Correctamente");
  //         this.getViajes();
  //       },
  //       error=>{
  //         console.log("Error "+error)
  //       }
  //     );
  //   }else{
  //     this.api.updateViaje(this.viaje.viajeId).subscribe(
  //       ()=>{
  //         console.log("Actualizado Correctamente");
  //         this.getViajes();
  //       },
  //       error=>{
  //         console.log("Error "+error)
  //       }
  //     );
  //   }
  // }

}
