import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GroceryDataService } from '../services/grocery-data.service';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-delete-grocery',
  imports: [CommonModule],
  templateUrl: './delete-grocery.component.html',
  styleUrl: './delete-grocery.component.css'
})
export class DeleteGroceryComponent implements OnInit{
    grocery!: Grocconnect
      message: string = ''
    
      constructor(
        private router: Router,
        private groceryDataService: GroceryDataService
      ) {}
    
      ngOnInit(): void {
        let productName = localStorage.getItem("productName");
        if (!productName) {
          alert("Something wrong, couldn't find where I stashed productName!");
    
          this.router.navigate(['']);
          return;
        }
        if(confirm(`Are you sure you want to delete ${productName}?`)){
          console.log('DeleteGroceryComponent::ngOnInit');
          console.log('productName: ' + productName);
    
          this.groceryDataService.deleteGrocery(productName)
          .subscribe({
            next: () => {
              this.message = "grocery: " + productName + " deleted";
              console.log(this.message);
              this.router.navigate(['/grocery']);
            },
            error: (error: any) => {
              console.log('Error: ' + error);
            }
        })
      }
      else{
        // If the user changes their mind about deleting the item - refresh page
        this.router.navigate(['/grocery']);
      }
    }
}
