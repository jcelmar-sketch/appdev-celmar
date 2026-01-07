import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonItem,
  IonIcon,
  IonCheckbox,
  IonButton,
  IonText
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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonIcon,
    IonCheckbox,
    IonButton,
    IonText,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class LoginPage {
  email = '';
  password = '';
  rememberMe = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      this.email = savedEmail;
      this.rememberMe = true;
    }
  }

  login() {
    if (!this.email || !this.password) {
      alert('Please enter both email and password');
      return;
    }

    this.http.post('http://localhost/snsu-app/login.php', {
      email: this.email,
      password: this.password
    }).subscribe(
      (response: any) => {
        if (response.message === 'Login successful') {
          localStorage.setItem('user', JSON.stringify(response.user));
          alert('Login Successful');
          this.router.navigate(['/home']);

          if (this.rememberMe) {
            localStorage.setItem('rememberedEmail', this.email);
          } else {
            localStorage.removeItem('rememberedEmail');
          }
        } else {
          alert('Invalid Email or Password');
        }
      },
      (error) => {
        alert('Login Failed. Please check your connection or try again later.');
        console.error(error);
      }
    );
  }

  forgotPassword() {
    alert('Forgot password feature coming soon.');
  }
}
