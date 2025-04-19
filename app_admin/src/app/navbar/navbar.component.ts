import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
    constructor (
      private authenticatoinService: AuthenticationService,
      private router: Router
    ) {}

    ngOnInit() { }

    public isLoggedIn(): boolean {
        return this.authenticatoinService.isLoggedIn();
    }

    public onLogout(): void {
      this.authenticatoinService.logout();
      this.router.navigate(['login']);
    }
    
} 


