import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ProduceDataService } from '../services/produce-data.service';

import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-edit-produce',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-produce.component.html',
  styleUrl: './edit-produce.component.css'
})
export class EditProduceComponent implements OnInit{
  public editForm!: FormGroup; 
  produce!: Grocconnect; 
  submitted = false; 
  message : string = '';

  constructor(
    private formBuilder: FormBuilder,
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

    console.log('EditProduceComponent::ngOnInit');
    console.log('productName: ' + productName);

    this.editForm = this.formBuilder.group ({
      _id: [],
      name: ['', Validators.required],
      cost: ['', Validators.required],
      image: ['', Validators.required],
      avail_qty: ['', Validators.required]
    })

    this.produceDataService.getProduce(productName)
    .subscribe({
      next: (value: any) => {
        this.produce = value;
        // Populate record into form
        this.editForm.patchValue(value[0]);

        if(!value){
          this.message = "No product Retrieved"
        }
        else{
          this.message = 'Product: ' + productName + ' retrieved';
        }
        console.log(this.message)
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    })
    
  }

  public onSubmit() 
  {
    this.submitted = true;

    if (this.editForm.valid)
    {
      this.produceDataService.updateProduce(this.editForm.value)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        }, 
        error: (error:any) => {
          console.log("Error: " + error);
        }
      })
    }
  }
// get the form short name to access the form fields
get f() { return this.editForm.controls; }


}
