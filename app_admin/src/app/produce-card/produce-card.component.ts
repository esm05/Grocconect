import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Produce } from '../models/produce';


@Component({
  selector: 'app-produce-card',
  imports: [CommonModule],
  templateUrl: './produce-card.component.html',
  styleUrl: './produce-card.component.css'
})
export class ProduceCardComponent implements OnInit{
    @Input('produce') produce: any


    constructor (
      private router: Router,
      private authenticationService: AuthenticationService
    ) {}

    ngOnInit(): void {
      
    }

    public editProduce(produce: Produce){
      localStorage.removeItem('productName');
      localStorage.setItem('productName', produce.name);
      this.router.navigate(['edit-produce'])
    }

    public deleteProduce(produce: Produce){
      localStorage.removeItem('productName');
      localStorage.setItem('productName', produce.name);
      this.router.navigate(['delete-produce'])
    }

    // User has to be authenticated to add or delete produce
    public isLoggedIn()
    {
      return this.authenticationService.isLoggedIn();
    }
}

