import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDairyComponent } from './add-dairy.component';

describe('AddDairyComponent', () => {
  let component: AddDairyComponent;
  let fixture: ComponentFixture<AddDairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDairyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
