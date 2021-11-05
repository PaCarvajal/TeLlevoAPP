import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { BDLocalService } from 'src/app/services/bdlocal.service';

@Component({
  selector: 'app-comp-cuenta',
  templateUrl: './comp-cuenta.component.html',
  styleUrls: ['./comp-cuenta.component.scss'],
})
export class CompCuentaComponent implements OnInit {
  data: any;
  bdlocal: BDLocalService;
  //Lottie animartion
  options:AnimationOptions = {
    path:'assets/car.json'
  }

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    // Se llama a la ruta activa y se obtiene sus parametros mediante una subscripcion
    this.activeroute.queryParams.subscribe(params => { // Utilizamos lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validamos que en la navegacion actual tenga extras
        this.data = this.router.getCurrentNavigation().extras.state.newUser; // Si tiene extra rescata lo enviado
        console.log(this.data) // Muestra por consola lo traido
      } 
    });
  }

  ngOnInit() {
    
  }

  salir(){
    this.router.navigate(['/login'])
  }
}
