import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  recoverForm: FormGroup;

  constructor(private form: FormBuilder) { }

  ngOnInit() {
    this.recoverForm = this.form.group({
      user:["",[Validators.required]]
    })
  }
}
