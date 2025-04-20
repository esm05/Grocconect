import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-bakery-card',
  imports: [CommonModule],
  templateUrl: './bakery-card.component.html',
  styleUrl: './bakery-card.component.css'
})
export class BakeryCardComponent implements OnInit{
  @Input('bakery') bakery: any


  constructor (
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    
  }

  public editBakery(bakery: Grocconnect){
    localStorage.removeItem('productName');
    localStorage.setItem('productName', bakery.name);
    this.router.navigate(['edit-bakery'])
  }

  public deleteBakery(bakery: Grocconnect){
    localStorage.removeItem('productName');
    localStorage.setItem('productName', bakery.name);
    this.router.navigate(['delete-bakery'])
  }

  // User has to be authenticated to add or delete bakery
  public isLoggedIn()
  {
    return this.authenticationService.isLoggedIn();
  }
}
