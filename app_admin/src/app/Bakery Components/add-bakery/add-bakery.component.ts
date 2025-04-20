import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { BakeryDataService } from '../services/bakery-data.service';

@Component({
  selector: 'app-add-bakery',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-bakery.component.html',
  styleUrl: './add-bakery.component.css'
})
export class AddBakeryComponent implements OnInit{
   addForm!: FormGroup;
      submitted = false;
  
      constructor (
        private formBuilder: FormBuilder,
        private router: Router,
        private bakeryService: BakeryDataService
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
          this.bakeryService.addBakery(this.addForm.value)
            .subscribe( {
              next: (data: any) => {
                console.log(data);
                this.router.navigate(['/bakery']);
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
