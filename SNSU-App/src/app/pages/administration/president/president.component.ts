import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-president',
  template: '<ion-content>President Content</ion-content>',
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PresidentComponent {
  constructor() { }
}
