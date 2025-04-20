import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-grocery-card',
  imports: [CommonModule],
  templateUrl: './grocery-card.component.html',
  styleUrl: './grocery-card.component.css'
})
export class GroceryCardComponent implements OnInit {
  @Input('grocery') grocery: any


  constructor (
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    
  }

  public editGrocery(grocery: Grocconnect){
    localStorage.removeItem('productName');
    localStorage.setItem('productName', grocery.name);
    this.router.navigate(['edit-grocery'])
  }

  public deleteGrocery(grocery: Grocconnect){
    localStorage.removeItem('productName');
    localStorage.setItem('productName', grocery.name);
    this.router.navigate(['delete-grocery'])
  }

  // User has to be authenticated to add or delete grocery
  public isLoggedIn()
  {
    return this.authenticationService.isLoggedIn();
  }
}
