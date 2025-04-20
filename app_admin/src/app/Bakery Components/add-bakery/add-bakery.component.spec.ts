import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBakeryComponent } from './add-bakery.component';

describe('AddBakeryComponent', () => {
  let component: AddBakeryComponent;
  let fixture: ComponentFixture<AddBakeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBakeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
