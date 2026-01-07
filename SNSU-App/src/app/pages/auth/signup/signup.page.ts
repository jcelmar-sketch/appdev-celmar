import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonInput,
  IonItem,
  IonButton,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonText,
  IonIcon
} from '@ionic/angular/standalone';

// Importing Ionicons for usage in the app
import { addIcons } from 'ionicons';
import { lockClosedOutline, personOutline, mailOutline } from 'ionicons/icons';
addIcons({
  lockClosedOutline,
  personOutline,
  mailOutline
});

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonLabel,
    IonCardContent,
    IonCard,
    IonHeader,
    IonIcon,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonItem,
    IonButton,
    FormsModule,
    HttpClientModule
  ]
})
export class SignupPage {
  full_name = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  signup() {
    this.http.post('http://localhost/snsu-app/register.php', {
      full_name: this.full_name,
      email: this.email,
      password: this.password
    }).subscribe(
      (response: any) => {
        alert('Registration Successful');
        this.router.navigate(['login']);
      },
      (error) => {
        console.error(error);
        alert('Registration Failed');
      }
    );
  }
}
