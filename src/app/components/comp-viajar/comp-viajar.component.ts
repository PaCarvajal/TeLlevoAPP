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
    this.api.getViajes().subscribe(
      (dato)=>{
      console.log('Lista viajes');
      console.log(dato);
      
      this.viajes=dato;
      
    }, (error)=>{
      console.log(error);
    });
  }

  // getViaje(viajeId){
  //   this.api.getViaje(viajeId).subscribe((dato)=>{
  //     this.viaje=dato;
  //   });
  // }

}
