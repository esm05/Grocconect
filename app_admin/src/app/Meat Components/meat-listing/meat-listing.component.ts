import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeatCardComponent } from '../meat-card/meat-card.component';

import { MeatDataService } from '../services/meat-data.service';
import { Grocconnect } from '../../models/grocconnect';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meat-listing',
  imports: [CommonModule, MeatCardComponent],
  templateUrl: './meat-listing.component.html',
  styleUrl: './meat-listing.component.css',
  providers: [MeatDataService]
})
export class MeatListingComponent implements OnInit{
  // Implement the data using "JSON"
    // meats: Array<any> = meats
  
    // Implement the listing from the model from the database
    meat!: Grocconnect[];
    message: string = ''
  
    constructor(
      private meatDataService: MeatDataService,
      private authenticationService: AuthenticationService,
      private router: Router
    ) {
      console.log('meat-listing component')
    }
    addMeat(): void {
      this.router.navigate(['add-meat'])
    }
    private getStuff(): void {
      this.meatDataService.getMeats()
        .subscribe({
          next: (value: any) => {
            this.meat = value
            if (value.length > 0)
            {
              this.message = 'There are ' + value.length + ' meat in the database.';
            }
            else{
              this.message =  'There were no meats in the database'
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
