import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { GroceryDataService } from '../services/grocery-data.service';

@Component({
  selector: 'app-add-grocery',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-grocery.component.html',
  styleUrl: './add-grocery.component.css'
})
export class AddGroceryComponent implements OnInit{
    addForm!: FormGroup;
        submitted = false;
    
        constructor (
          private formBuilder: FormBuilder,
          private router: Router,
          private groceryService: GroceryDataService
        ) {}
    
        ngOnInit(): void {
          this.addForm = this.formBuilder.group ({
            _id: [],
            name: ['', Validators.required],
            cost: ['', Validators.required],
            image: ['', Validators.required],
            avail_qty: ['', Validators.required]
          })
        }
    
        public onSubmit() {
          this.submitted = true;
          if (this.addForm.valid){
            this.groceryService.addGrocery(this.addForm.value)
              .subscribe( {
                next: (data: any) => {
                  console.log(data);
                  this.router.navigate(['/grocery']);
                },
                error: (error: any) => {
                  console.log('Error: ' + error);
                }
              });
          }
        }
        // get the form short name to access the form fields
        get f() { return this.addForm.controls; }
}
