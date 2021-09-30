import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup; //aqui le decimos que el login form es un form group
  
  newUser={ //aqui le indicamos que campos que usaremos con el navigationExtras (la password de momento no se utiliza)
    newUsuario:"",
    newPass:""
  }

  get user() { //aquí le indicamos al loginform que datos tiene que obtener mediante las etiquetas que se utilizan en el html
    return this.loginForm.get('user')
  }

  get password() {
    return this.loginForm.get('password')
  }
  

  constructor(private form: FormBuilder, private router: Router) { }

  ngOnInit() { 
    /**aqui le indicamos los campos a validar y qué tipo de validaciones queremos hacer, en este caso se utilizo los que ya 
     * vienen construidos en validators, pero se pueden crear personalizados dependiendo de las necesidades*/
    this.loginForm = this.form.group({
      user: ["",[Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(3)]]
    })
  }

  public ingresar() { 
    /**esta función se llama en el ngSubmit, que es cuando se presiona el botón ingresar ya que es parte del formGroup
     * y lo que hace es enviar las credenciales por consola, navegar a la siguiente página y además utiliza el navigationExtras
     * para mandar el nombre de usuario a home y poder mostrarlo por pantalla*/
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

