import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGroceryComponent } from './delete-grocery.component';

describe('DeleteGroceryComponent', () => {
  let component: DeleteGroceryComponent;
  let fixture: ComponentFixture<DeleteGroceryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteGroceryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
