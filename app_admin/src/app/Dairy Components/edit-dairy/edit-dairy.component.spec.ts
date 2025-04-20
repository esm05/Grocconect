import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDairyComponent } from './edit-dairy.component';

describe('EditDairyComponent', () => {
  let component: EditDairyComponent;
  let fixture: ComponentFixture<EditDairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDairyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
