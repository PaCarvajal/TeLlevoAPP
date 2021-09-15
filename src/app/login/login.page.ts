import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {
  user={
    usuario:"",
    password:""
  }
  
  constructor(private router: Router) { 
    
  }
  

  ngOnInit() {

  }
  ingresar(){
    let navigationExtras: NavigationExtras = {
      state: {user: this.user}
    };
    this.router.navigate(['/home'], navigationExtras)

    }
  recuperar(){
    this.router.navigate(['/recover'])
  }
}
/** este es el codigo de form, pero no funciona :')
export class ReactiveForms implements OnInit {
  form: FormGroup;

  constructor(private builder: FormBuilder){

  }
  ngOnInit(){
    this.form = this.builder.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]

    })

  }

}
*/

