import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BakeryCardComponent } from '../bakery-card/bakery-card.component';

import { BakeryDataService } from '../services/bakery-data.service';
import { Grocconnect } from '../../models/grocconnect';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bakery-listing',
  imports: [CommonModule, BakeryCardComponent],
  templateUrl: './bakery-listing.component.html',
  styleUrl: './bakery-listing.component.css',
  providers: [BakeryDataService]
})
export class BakeryListingComponent implements OnInit{
 bakeries!: Grocconnect[];
    message: string = ''
  
    constructor(
      private bakeryDataService: BakeryDataService,
      private authenticationService: AuthenticationService,
      private router: Router
    ) {
      console.log('bakery-listing component')
    }
    addBakery(): void {
      this.router.navigate(['add-bakery'])
    }
    private getStuff(): void {
      this.bakeryDataService.getBakeries()
        .subscribe({
          next: (value: any) => {
            this.bakeries = value
            if (value.length > 0)
            {
              this.message = 'There are ' + value.length + ' bakery products in the database.';
            }
            else{
              this.message =  'There were no bakery products in the database'
            }
            console.log(this.message)
          },
          error: (error: any) => {
            console.log('Error: ' + error);
          }
        })
    }
    ngOnInit(): void {
      console.log('ngOnInit');
      this.getStuff()
    }
  
    // User has to be authenticated to add produce
    public isLoggedIn(){
        return this.authenticationService.isLoggedIn();
    }
}
