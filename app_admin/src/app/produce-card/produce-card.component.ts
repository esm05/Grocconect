import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Produce } from '../models/produce';


@Component({
  selector: 'app-produce-card',
  imports: [CommonModule],
  templateUrl: './produce-card.component.html',
  styleUrl: './produce-card.component.css'
})
export class ProduceCardComponent implements OnInit{
    @Input('produce') produce: any


    constructor (private router: Router) {}

    ngOnInit(): void {
      
    }

    public editProduce(produce: Produce){
      localStorage.removeItem('productName');
      localStorage.setItem('productName', produce.name);
      this.router.navigate(['edit-produce'])
    }

    public deleteProduce(produce: Produce){
      localStorage.removeItem('productName');
      localStorage.setItem('productName', produce.name);
      this.router.navigate(['delete-produce'])
    }
}

