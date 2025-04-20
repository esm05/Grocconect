import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeafoodCardComponent } from '../seafood-card/seafood-card.component';

import { SeafoodDataService } from '../services/seafood-data.service';
import { Grocconnect } from '../../models/grocconnect';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seafood-listing',
  imports: [CommonModule, SeafoodCardComponent],
  templateUrl: './seafood-listing.component.html',
  styleUrl: './seafood-listing.component.css',
  providers: [SeafoodDataService]
})
export class SeafoodListingComponent implements OnInit {
    // Implement the data using "JSON"
      // produces: Array<any> = produces 
    
      // Implement the listing from the model from the database
      seafoods!: Grocconnect[];
      message: string = ''
    
      constructor(
        private seafoodDataService: SeafoodDataService,
        private authenticationService: AuthenticationService,
        private router: Router
      ) {
        console.log('seafood-listing component')
      }
      addSeafood(): void {
        this.router.navigate(['add-seafood'])
      }
      private getStuff(): void {
        this.seafoodDataService.getSeafoods()
          .subscribe({
            next: (value: any) => {
              this.seafoods = value
              if (value.length > 0)
              {
                this.message = 'There are ' + value.length + ' seafood products in the database.';
              }
              else{
                this.message =  'There were no seafood products in the database'
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
