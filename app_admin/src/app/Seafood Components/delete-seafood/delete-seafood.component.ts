import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SeafoodDataService } from '../services/seafood-data.service';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-delete-seafood',
  imports: [CommonModule],
  templateUrl: './delete-seafood.component.html',
  styleUrl: './delete-seafood.component.css'
})
export class DeleteSeafoodComponent implements OnInit{
    seafood!: Grocconnect
      message: string = ''
    
      constructor(
        private router: Router,
        private seafoodDataService: SeafoodDataService
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
    
          this.seafoodDataService.deleteSeafood(productName)
          .subscribe({
            next: () => {
              this.message = "Produce: " + productName + " deleted";
              console.log(this.message);
              this.router.navigate(['/seafood']);
            },
            error: (error: any) => {
              console.log('Error: ' + error);
            }
        })
      }
      else{
        // If the user changes their mind about deleting the item - refresh page
        this.router.navigate(['/seafood']);
      }
    }
}
