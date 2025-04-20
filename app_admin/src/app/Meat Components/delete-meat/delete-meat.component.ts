import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MeatDataService } from '../services/meat-data.service';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-delete-meat',
  imports: [CommonModule],
  templateUrl: './delete-meat.component.html',
  styleUrl: './delete-meat.component.css'
})
export class DeleteMeatComponent implements OnInit{
  meat!: Grocconnect
    message: string = ''
  
    constructor(
      private router: Router,
      private meatDataService: MeatDataService
    ) {}
  
    ngOnInit(): void {
      let productName = localStorage.getItem("productName");
      if (!productName) {
        alert("Something wrong, couldn't find where I stashed productName!");
  
        this.router.navigate(['']);
        return;
      }
      if(confirm(`Are you sure you want to delete ${productName}?`)){
        console.log('DeleteMeatComponent::ngOnInit');
        console.log('productName: ' + productName);
  
        this.meatDataService.deleteMeat(productName)
        .subscribe({
          next: () => {
            this.message = "Meat: " + productName + " deleted";
            console.log(this.message);
            this.router.navigate(['/meat']);
          },
          error: (error: any) => {
            console.log('Error: ' + error);
          }
      })
    }
    else{
      // If the user changes their mind about deleting the item - refresh page
      this.router.navigate(['/meat']);
    }
  }

}
