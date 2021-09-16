import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  recoverForm: FormGroup;

  constructor(private form: FormBuilder, public toast: ToastController) { }

  ngOnInit() {
    this.recoverForm = this.form.group({
      user:["",[Validators.required]]
    })
  }

  recuperar() {
    console.log(this.recoverForm.value);
    this.mostrarToast();
  }

  async mostrarToast() {
    await this.toast.create({
      message: 'Tu contraseña fue enviada a tu correo',
      duration: 3000,
      position: 'bottom'
    }).then(res => res.present())
  }  
}
