import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeafoodComponent } from './add-seafood.component';

describe('AddSeafoodComponent', () => {
  let component: AddSeafoodComponent;
  let fixture: ComponentFixture<AddSeafoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSeafoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSeafoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
