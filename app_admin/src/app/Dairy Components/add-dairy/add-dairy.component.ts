import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { DairyDataService } from '../services/dairy-data.service';

@Component({
  selector: 'app-add-dairy',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-dairy.component.html',
  styleUrl: './add-dairy.component.css'
})
export class AddDairyComponent implements OnInit{
    addForm!: FormGroup;
        submitted = false;
    
        constructor (
          private formBuilder: FormBuilder,
          private router: Router,
          private dairyService: DairyDataService
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
            this.dairyService.addDairy(this.addForm.value)
              .subscribe( {
                next: (data: any) => {
                  console.log(data);
                  this.router.navigate(['/dairy']);
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
