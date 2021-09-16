import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{
  data: any;

  //Lottie animartion
  options:AnimationOptions = {
    path:'assets/car.json'
  }
  
  //ejemplo
  anim: Animation;
  @ViewChild('bienvenida', {static: false }) bienvenida: ElementRef;

  constructor(private activeroute: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) {
    // Se llama a la ruta activa y se obtiene sus parametros mediante una subscripcion
    this.activeroute.queryParams.subscribe(params => { // Utilizamos lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validamos que en la navegacion actual tenga extras
        this.data = this.router.getCurrentNavigation().extras.state.newUser; // Si tiene extra rescata lo enviado
        console.log(this.data) // Muestra por consola lo traido
      }else{this.router.navigate(["/login"])} // Si no tiene extra la navegacion actual navegar al login
    });
  }
  
  //ejemplo
  ngAfterViewInit(){
    this.anim = this.animationCtrl.create();
    this.anim
    .addElement(this.bienvenida.nativeElement)
    .duration(2000)
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.5)' },
      { offset: 1, transform: 'scale(1)' }
    ])
    .iterations(Infinity)
  }

}
