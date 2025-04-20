import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBakeryComponent } from './edit-bakery.component';

describe('EditBakeryComponent', () => {
  let component: EditBakeryComponent;
  let fixture: ComponentFixture<EditBakeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBakeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
