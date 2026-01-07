import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, schoolOutline, peopleOutline, bookOutline, personOutline, flaskOutline, libraryOutline, ribbonOutline, businessOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    IonApp, 
    IonSplitPane, 
    IonMenu, 
    IonContent, 
    IonList, 
    IonListHeader, 
    IonNote, 
    IonMenuToggle, 
    IonItem, 
    IonIcon, 
    IonLabel, 
    IonRouterOutlet
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home-outline' },
    { title: 'The School', url: '/the-school', icon: 'school-outline' },
    { title: 'Administration', url: '/administration', icon: 'people-outline' },
    { title: 'Academics', url: '/academics', icon: 'book-outline' },
    { title: 'Faculty', url: '/faculty', icon: 'person-outline' },
    { title: 'Students', url: '/students', icon: 'people-outline' },
    { title: 'RIE', url: '/rie', icon: 'flask-outline' },
    { title: 'Library', url: '/library', icon: 'library-outline' },
    { title: 'Alumni', url: '/alumni', icon: 'ribbon-outline' },
    { title: 'Campuses', url: '/campuses', icon: 'business-outline' },
  ];

  public labels = [];

  constructor() {
    addIcons({
      homeOutline,
      schoolOutline,
      peopleOutline,
      bookOutline,
      personOutline,
      flaskOutline,
      libraryOutline,
      ribbonOutline,
      businessOutline
    });
  }
}
