import { CommonModule } from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-dairy-card',
  imports: [CommonModule],
  templateUrl: './dairy-card.component.html',
  styleUrl: './dairy-card.component.css'
})
export class DairyCardComponent implements OnInit{
  @Input('dairy') dairy: any


    constructor (
      private router: Router,
      private authenticationService: AuthenticationService
    ) {}

    ngOnInit(): void {
      
    }

    public editDairy(dairy: Grocconnect){
      localStorage.removeItem('dairyName');
      localStorage.setItem('dairyName', dairy.name);
      this.router.navigate(['edit-dairy'])
    }

    public deleteDairy(dairy: Grocconnect){
      localStorage.removeItem('dairyName');
      localStorage.setItem('dairyName', dairy.name);
      this.router.navigate(['delete-dairy'])
    }

    // User has to be authenticated to add or delete dairy
    public isLoggedIn()
    {
      return this.authenticationService.isLoggedIn();
    }
}
