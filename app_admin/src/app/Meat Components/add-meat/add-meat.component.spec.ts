import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeatComponent } from './add-meat.component';

describe('AddMeatComponent', () => {
  let component: AddMeatComponent;
  let fixture: ComponentFixture<AddMeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
