import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryCardComponent } from '../grocery-card/grocery-card.component';
import { GroceryDataService } from '../services/grocery-data.service';
import { Grocconnect } from '../../models/grocconnect';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery-listing',
  imports: [CommonModule, GroceryCardComponent],
  templateUrl: './grocery-listing.component.html',
  styleUrl: './grocery-listing.component.css',
  providers: [GroceryDataService]
})
export class GroceryListingComponent implements OnInit {
    // Implement the data using "JSON"
      // produces: Array<any> = produces 
    
      // Implement the listing from the model from the database
      groceries!: Grocconnect[];
      message: string = ''
    
      constructor(
        private productDataService: GroceryDataService,
        private authenticationService: AuthenticationService,
        private router: Router
      ) {
        console.log('grocery-listing component')
      }
      addGrocery(): void {
        this.router.navigate(['add-grocery'])
      }
      private getStuff(): void {
        this.productDataService.getGroceries()
          .subscribe({
            next: (value: any) => {
              this.groceries = value
              if (value.length > 0)
              {
                this.message = 'There are ' + value.length + ' grocery in the database.';
              }
              else{
                this.message =  'There were no grocery in the database'
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
    
      // User has to be authenticated to add grocery
      public isLoggedIn(){
          return this.authenticationService.isLoggedIn();
      }
}
