import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DairyDataService } from '../services/dairy-data.service';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-delete-dairy',
  imports: [CommonModule],
  templateUrl: './delete-dairy.component.html',
  styleUrl: './delete-dairy.component.css'
})
export class DeleteDairyComponent implements OnInit {
  dairy!: Grocconnect
    message: string = ''
  
    constructor(
      private router: Router,
      private dairyDataService: DairyDataService
    ) {}
  
    ngOnInit(): void {
      let productName = localStorage.getItem("productName");
      if (!productName) {
        alert("Something wrong, couldn't find where I stashed productName!");
  
        this.router.navigate(['']);
        return;
      }
      if(confirm(`Are you sure you want to delete ${productName}?`)){
        console.log('DeleteProduceComponent::ngOnInit');
        console.log('productName: ' + productName);
  
        this.dairyDataService.deleteDairy(productName)
        .subscribe({
          next: () => {
            this.message = "Dairy: " + productName + " deleted";
            console.log(this.message);
            this.router.navigate(['']);
          },
          error: (error: any) => {
            console.log('Error: ' + error);
          }
      })
    }
    else{
      // If the user changes their mind about deleting the item - refresh page
      this.router.navigate(['/dairy']);
    }
  }
}
