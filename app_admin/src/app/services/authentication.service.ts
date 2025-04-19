import { Injectable, Inject} from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})

// Setup storage and service access
export class AuthenticationService {

  constructor(
    @Inject (BROWSER_STORAGE) private storage: Storage,
    private userDataService: UserDataService
  ) { }

  // Variable to handle auth response
  authResp: AuthResponse = new AuthResponse();

  // Get JWT token from Storage
  // The key for this token is 'grocconnect-token'

  public getToken(): string {
    let out: any;
    out = this.storage.getItem('grocconnect-token');

    // Gurantee the return of a string even if there is no token
    if(!out)
    {
      return '';
    }

    return out;
  }

  // Save token to Storage provider 
  public saveToken(token: string): void {
    this.storage.setItem('grocconnect-token', token);
  }

  // Logout of application and remove the JWT from storage
  public logout(): void {
    this.storage.removeItem('grocconnect-token')
  }

  /** Boolean to determine if we are logged in and the token is 
  *   still valid. Even if we have a token we will still have to
  * reauthenticate if the token expired
  */
  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    // console.log('Current token:', token); // Debug to see token because isLoggedIn() was returning false
    /* Fatal flaw in save token method so JWT was not being saved in the local storage API*/
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    }else {
      return false;
    }
  }
  /**
   * Retrieve the current user. This function should only be called 
   * after the calling method has checked to make sure that the user 
   * isLoggedIn.
   */
  public getCurrentUser(): User {
    const token: string = this.getToken();
    const {email, name} = JSON.parse(atob(token.split('.')[1]));
    return {email, name} as User;
  }

  /**
   *  Login method that leverages the login method in {_____}
   *  Because that method returns an observable, we subscribe to the 
   * result and only process when the observable condition is satisfied
   */
  
  public login(user: User, pwd: string): Observable<AuthResponse> {
    return new Observable(observer => {
      this.userDataService.login(user, pwd).subscribe({
        next: (value: AuthResponse) => {
          if (value) {
            console.log('Login successful:', value);
            this.authResp = value;
            this.saveToken(this.authResp.token);
            observer.next(value);
            observer.complete();
          }
        },
        error: (error: any) => {
          console.log('Error: ' + error);
          observer.error(error);
        }
      });
    });
  }
  /**
   * Register method that leverages the register method in {_____} 
   * that returns an observable, we subscribe to the result 
   * and only process the observable when the condition is satisfied
   */
  
  public register(user: User, pwd: string): void{
    this.userDataService.register(user, pwd)
      .subscribe({
        next: (value: any) => {
          if (value)
          {
            console.log(value);
            this.authResp = value;
            this.saveToken(this.authResp.token);
          }
        },
        error: (error: any) => {
          console.log("Error: " + error);
        }
      })
  }
}
