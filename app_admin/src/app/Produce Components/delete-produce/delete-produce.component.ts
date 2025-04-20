import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProduceDataService } from '../services/produce-data.service';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-delete-produce',
  imports: [CommonModule],
  templateUrl: './delete-produce.component.html',
  styleUrl: './delete-produce.component.css'
})
export class DeleteProduceComponent implements OnInit{
  produce!: Grocconnect
  message: string = ''

  constructor(
    private router: Router,
    private produceDataService: ProduceDataService
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

      this.produceDataService.deleteProduce(productName)
      .subscribe({
        next: () => {
          this.message = "Produce: " + productName + " deleted";
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
    this.router.navigate(['']);
  }
}
}
