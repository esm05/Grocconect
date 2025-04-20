import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListingComponent } from './grocery-listing.component';

describe('GroceryListingComponent', () => {
  let component: GroceryListingComponent;
  let fixture: ComponentFixture<GroceryListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
