import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BakeryDataService } from '../services/bakery-data.service';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-delete-bakery',
  imports: [CommonModule],
  templateUrl: './delete-bakery.component.html',
  styleUrl: './delete-bakery.component.css'
})
export class DeleteBakeryComponent implements OnInit {
  bakery!: Grocconnect
    message: string = ''
  
    constructor(
      private router: Router,
      private bakeryDataService: BakeryDataService
    ) {}
  
    ngOnInit(): void {
      let productName = localStorage.getItem("productName");
      if (!productName) {
        alert("Something wrong, couldn't find where I stashed productName!");
  
        this.router.navigate(['']);
        return;
      }
      if(confirm(`Are you sure you want to delete ${productName}?`)){
        console.log('DeletebakeryComponent::ngOnInit');
        console.log('productName: ' + productName);
  
        this.bakeryDataService.deleteBakery(productName)
        .subscribe({
          next: () => {
            this.message = "bakery: " + productName + " deleted";
            console.log(this.message);
            this.router.navigate(['/bakery']);
          },
          error: (error: any) => {
            console.log('Error: ' + error);
          }
      })
    }
    else{
      // If the user changes their mind about deleting the item - refresh page
      this.router.navigate(['/bakery']);
    }
  }
}
