import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { SeafoodDataService } from '../services/seafood-data.service';
import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-edit-seafood',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-seafood.component.html',
  styleUrl: './edit-seafood.component.css'
})
export class EditSeafoodComponent implements OnInit{
    public editForm!: FormGroup; 
      seafood!: Grocconnect; 
      submitted = false; 
      message : string = '';
    
      constructor(
        private formBuilder: FormBuilder,
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
    
        console.log('EditSeafoodComponent::ngOnInit');
        console.log('productName: ' + productName);
    
        this.editForm = this.formBuilder.group ({
          _id: [],
          name: ['', Validators.required],
          cost: ['', Validators.required],
          image: ['', Validators.required],
          avail_qty: ['', Validators.required]
        })
    
        this.seafoodDataService.getSeafood(productName)
        .subscribe({
          next: (value: any) => {
            this.seafood = value;
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
          this.seafoodDataService.updateSeafood(this.editForm.value)
          .subscribe({
            next: (value: any) => {
              console.log(value);
              this.router.navigate(['/seafood']);
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
