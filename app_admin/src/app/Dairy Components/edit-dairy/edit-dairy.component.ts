import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { DairyDataService } from '../services/dairy-data.service';

import { Grocconnect } from '../../models/grocconnect';

@Component({
  selector: 'app-edit-dairy',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-dairy.component.html',
  styleUrl: './edit-dairy.component.css'
})
export class EditDairyComponent implements OnInit {
  public editForm!: FormGroup; 
  dairy!: Grocconnect; 
  submitted = false; 
  message : string = '';
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private dairyDataService: DairyDataService
    ) {}
  
    ngOnInit(): void {
      let dairyName = localStorage.getItem("dairyName");
      if (!dairyName) {
        alert("Something wrong, couldn't find where I stashed dairyName!");
  
        this.router.navigate(['']);
        return;
      }
  
      console.log('EditDairyComponent::ngOnInit');
      console.log('dairyName: ' + dairyName);
  
      this.editForm = this.formBuilder.group ({
        _id: [],
        name: ['', Validators.required],
        cost: ['', Validators.required],
        image: ['', Validators.required],
        avail_qty: ['', Validators.required]
      })
  
      this.dairyDataService.getDairy(dairyName)
      .subscribe({
        next: (value: any) => {
          this.dairy = value;
          // Populate record into form
          this.editForm.patchValue(value[0]);
  
          if(!value){
            this.message = "No dairy Retrieved"
          }
          else{
            this.message = 'Dairy: ' + dairyName + ' retrieved';
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
        this.dairyDataService.updateDairy(this.editForm.value)
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
