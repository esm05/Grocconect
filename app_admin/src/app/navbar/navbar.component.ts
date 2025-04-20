import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
    selectedComponent = 'produce'; // Default selection
    constructor (
      private authenticatoinService: AuthenticationService,
      private router: Router
    ) {}

    ngOnInit() 
    { const savedComponent = localStorage.getItem('selectedComponent')
      if (savedComponent) {
        this.selectedComponent = savedComponent
      }
    }

    public isLoggedIn(): boolean {
        return this.authenticatoinService.isLoggedIn();
    }

    public onLogout(): void {
      this.authenticatoinService.logout();
      this.router.navigate(['login']);
    }

    selectComponent(component: string): void {
      this.selectedComponent = component;
      localStorage.setItem('selectedComponent', component);
    }
  
    onComponentChange(): void {
      // Save the selected componet preference
      localStorage.setItem('selectedComponent', this.selectedComponent)
      // Route based on selected component
  switch (this.selectedComponent) {
    case 'produce':
      this.router.navigate(['']);
      break;
    case 'dairy':
      this.router.navigate(['dairy']);
      break;
    case 'grocery':
      this.router.navigate(['grocery']);
      break;
    case 'meat':
      this.router.navigate(['meat']);
      break;
    case 'seafood':
      this.router.navigate(['seafood']);
      break;
    case 'bakery':
      this.router.navigate(['bakery']);
      break;
    default:
      console.error('Unknown component selected:', this.selectedComponent);
      break;
  }
      // Out to console when user selects an option
      console.log('Selected component:', this.selectedComponent)
    }
    
} 


