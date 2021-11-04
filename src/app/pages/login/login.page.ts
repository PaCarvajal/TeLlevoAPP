import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

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

  get user() { //aquí le indicamos al loginform que datos tiene que obtener mediante las etiquetas que se utilizan en el HTML
    return this.loginForm.get('user')
  }

  get password() {
    return this.loginForm.get('password')
  }
  

  constructor(private form: FormBuilder, private router: Router, public alertController:AlertController, public toast:ToastController) {
    }
  
    
  ngOnInit() { 
    /**aqui le indicamos los campos a validar y qué tipo de validaciones queremos hacer, en este caso se utilizó los que ya 
     * vienen construidos en validators, pero se pueden crear personalizados dependiendo de las necesidades*/
    this.loginForm = this.form.group({
      user: ["",[Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(3)]]
    })
  }
  
  //aquí se crea el componente Alert que se utilizará para recuperar la contraseña, consiste en una ventana emergente que se superpone al login
  async presentAlert() {
    const alert = await this.alertController.create({
      //aquí se asignan todas las propiedades que tiene el alert, como las clases de estilo, mensajes, input, botones, etc
      cssClass: 'font-monR',
      message: 'Para recuperar tu contraseña, ingresa tu usuario y te la enviaremos por correo electrónico.',
      backdropDismiss: false, //esta propiedad impide que cuando el usuario toque fuera del alert este desaparezca, permitiendo que desaparezca solo al presionar 'Cancelar'
      inputs: [
        {
          //aquí se declaran los input y sus propiedades, en este caso solo tenemos el nombre de usuario, que es lo que necesitamos para recuperar la contraseña
          type: 'text',
          name: 'user',
          label: 'Usuario',
          placeholder: 'ej.ejemplo',
        }
      ],
      buttons: [
        {
          //en los botones, tenemos el de envíar y el de cancelar, en este caso, se genera el mensaje de error dentro del botón de 'Enviar' usando lógica
          text: 'Enviar',
          role: 'submit',
          handler: (formData: { user: string }) => {
            if (formData.user && this.validarUsuario(formData.user).isValid) { //aquí estamos validando con un método creado mas abajo
              this.mostrarToast();
              return formData;
            } else {
              if (!alert.getElementsByClassName('mensaje-error').length) {
                const input = alert.getElementsByTagName('input')[0]; //aquí le estoy diciendo que input es el que tiene que enfocar
    
                const validationErrors = document.createElement('div');
                validationErrors.className = 'mensaje-error'; //aquí le digo que elemento HTML debe crear para contener el mensaje de error
    
                const errorMessage = document.createElement('small'); //aquí creamos otro elemento HTML que contendrá el mensaje
                errorMessage.classList.add('mensaje-error');
                errorMessage.textContent = 'El nombre de usuario no es válido.';
    
                validationErrors.appendChild(errorMessage);
    
                input.insertAdjacentElement('afterend', validationErrors);
              }
    
              return false;
            }
          }
        },
      {
        text: 'Cancelar',
        role: 'cancel',    
      }
      ]
    });
    await alert.present();
  }

  //aquí se crea el toast que mostraremos cuando el nombre de usuario para la recuperación de la contraseña se ha ingresado correctamente
  async mostrarToast() {
    await this.toast.create({
      cssClass: 'font-monR-blanca',
      message: 'Tu contraseña fue enviada a tu correo',
      duration: 3000,
      position: 'bottom'
    }).then(res => res.present())
  }  

  public ingresar() { 
    /**este método se llama en el ngSubmit, que es cuando se presiona el botón ingresar ya que es parte del formGroup
     * y lo que hace es enviar las credenciales por consola, navegar a la siguiente página y además utiliza el navigationExtras
     * para mandar el nombre de usuario a home y poder mostrarlo por pantalla*/
    console.log(this.loginForm.value);

    let navigationExtras: NavigationExtras = {
      state: {
        newUser: this.newUser 
      }
    };
    this.router.navigate(['/home/micuenta'], navigationExtras);
  }


  //este método permite validar que el usuario tenga al menos 3 caracteres
  validarUsuario(user: string) {
    if(user.length >=3){
      return {
        isValid: true,
        message: ''
      };
    } else {
        return {
          isValid: false,
          message: 'El nombre de usuario no es válido.'
        }
    }
}
}


  

