import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-seafood-card',
  imports: [CommonModule],
  templateUrl: './seafood-card.component.html',
  styleUrl: './seafood-card.component.css'
})
export class SeafoodCardComponent implements OnInit{
  @Input('seafood') seafood: any


  constructor (
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    
  }

  public editSeafood(seafood: Grocconnect){
    localStorage.removeItem('productName');
    localStorage.setItem('productName', seafood.name);
    this.router.navigate(['edit-seafood'])
  }

  public deleteSeafood(seafood: Grocconnect){
    localStorage.removeItem('productName');
    localStorage.setItem('productName', seafood.name);
    this.router.navigate(['delete-seafood'])
  }

  // User has to be authenticated to add or delete produce
  public isLoggedIn()
  {
    return this.authenticationService.isLoggedIn();
  }
}
