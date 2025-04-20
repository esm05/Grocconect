import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBakeryComponent } from './delete-bakery.component';

describe('DeleteBakeryComponent', () => {
  let component: DeleteBakeryComponent;
  let fixture: ComponentFixture<DeleteBakeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteBakeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
