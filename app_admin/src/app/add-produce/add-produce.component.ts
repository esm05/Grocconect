import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ProduceDataService } from '../services/produce-data.service';

@Component({
  selector: 'app-add-produce',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-produce.component.html',
  styleUrl: './add-produce.component.css'
})
export class AddProduceComponent implements OnInit {
    addForm!: FormGroup;
    submitted = false;

    constructor (
      private formBuilder: FormBuilder,
      private router: Router,
      private produceService: ProduceDataService
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
        this.produceService.addProduce(this.addForm.value)
          .subscribe( {
            next: (data: any) => {
              console.log(data);
              this.router.navigate(['']);
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
