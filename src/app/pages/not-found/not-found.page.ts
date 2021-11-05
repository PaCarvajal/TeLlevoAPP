import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  @ViewChild('animar',{read: ElementRef, static:true}) animar:ElementRef;
  constructor(private animationCtrl:AnimationController) {}

  ngOnInit() {
  }

  //animación
  ngAfterViewInit(){
    const heart = this.animationCtrl.create()
  .addElement(this.animar.nativeElement)
  .duration(1500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  .fromTo('opacity', '1', '0.2');

  heart.play()
  }



}
