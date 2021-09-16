import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  
  newUser={
    newUsuario:"",
    newPass:""
  }

  get user() {
    return this.loginForm.get('user')
  }

  get password() {
    return this.loginForm.get('password')
  }
  

  constructor(private form: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.form.group({
      user: ["",[Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(3)]]
    })
  }

  public ingresar() {
    console.log(this.loginForm.value);

    let navigationExtras: NavigationExtras = {
      state: {
        newUser: this.newUser 
      }
    };
    this.router.navigate(['/home'], navigationExtras);
  }
  /**this.router.navigate(['/home'],navigationExtras);*/

  
}

