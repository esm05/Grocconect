import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public formError: string = ''; 
  submitted = false; 

  credentials = {
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private authenticationServices: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password || !this.credentials.password) {
      this.formError = "All fields are required. Try Again";
    } else {
      this.doLogin()
    }
  }

  public doLogin(): void {
    const newUser = {
      name: this.credentials.name,
      email: this.credentials.email
    } as User;
  
    this.authenticationServices.login(newUser, this.credentials.password)
      .subscribe({
        next: (response) => {
          // console.log("Login response:", response);
          // Navigate to home screen 
          this.router.navigate(['']);
          
          // Debugging to test navigation on a successful log in attempt
          /*.then(() => {
            // console.log('Navigation complete');
          }).catch(err => {
            console.error('Navigation failed:', err);
          }); */
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.formError = 'Invalid credentials. Please try again.';
        }
      });
    }
}