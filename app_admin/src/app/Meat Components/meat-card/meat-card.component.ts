import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-meat-card',
  imports: [CommonModule],
  templateUrl: './meat-card.component.html',
  styleUrl: './meat-card.component.css'
})
export class MeatCardComponent implements OnInit{
  @Input('meat') meat: any


  constructor (
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    
  }

  public editMeat(meat: Grocconnect){
    localStorage.removeItem('productName');
    localStorage.setItem('productName', meat.name);
    this.router.navigate(['edit-meat'])
  }

  public deleteMeat(meat: Grocconnect){
    localStorage.removeItem('productName');
    localStorage.setItem('productName', meat.name);
    this.router.navigate(['delete-meat'])
  }

  // User has to be authenticated to add or delete meat
  public isLoggedIn()
  {
    return this.authenticationService.isLoggedIn();
  }
}
