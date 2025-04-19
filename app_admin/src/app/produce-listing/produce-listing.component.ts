import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduceCardComponent } from '../produce-card/produce-card.component';

import { ProduceDataService } from '../services/produce-data.service';
import { Produce } from '../models/produce';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produce-listing',
  standalone: true,
  imports: [CommonModule, ProduceCardComponent],
  templateUrl: './produce-listing.component.html',
  styleUrl: './produce-listing.component.css',
  providers: [ProduceDataService]
})
export class ProduceListingComponent implements OnInit{
  // Implement the data using "JSON"
  // produces: Array<any> = produces 

  // Implement the listing from the model from the database
  produces!: Produce[];
  message: string = ''

  constructor(
    private productDataService: ProduceDataService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    console.log('produce-listing component')
  }
  addProduce(): void {
    this.router.navigate(['add-produce'])
  }
  private getStuff(): void {
    this.productDataService.getProduces()
      .subscribe({
        next: (value: any) => {
          this.produces = value
          if (value.length > 0)
          {
            this.message = 'There are ' + value.length + ' produce in the database.';
          }
          else{
            this.message =  'There were no produce in the database'
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
