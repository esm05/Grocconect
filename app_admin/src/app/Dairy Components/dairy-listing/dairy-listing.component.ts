import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DairyCardComponent } from '../dairy-card/dairy-card.component';

import { DairyDataService } from '../services/dairy-data.service';
import { Grocconnect } from '../../models/grocconnect';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dairy-listing',
  imports: [CommonModule, DairyCardComponent],
  templateUrl: './dairy-listing.component.html',
  styleUrl: './dairy-listing.component.css',
  providers: [DairyCardComponent]
})
export class DairyListingComponent implements OnInit{
  // Implement the data using "JSON"
    // produces: Array<any> = produces 
  
    // Implement the listing from the model from the database
    dairy!: Grocconnect[];
    message: string = ''
  
    constructor(
      private dairyDataService: DairyDataService,
      private authenticationService: AuthenticationService,
      private router: Router
    ) {
      console.log('dairy-listing component')
    }
    addDairy(): void {
      this.router.navigate(['add-dairy'])
    }
    private getStuff(): void {
      this.dairyDataService.getDairies()
        .subscribe({
          next: (value: any) => {
            this.dairy = value
            if (value.length > 0)
            {
              this.message = 'There are ' + value.length + ' dairy products in the database.';
            }
            else{
              this.message =  'There were no dairy products in the database'
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
