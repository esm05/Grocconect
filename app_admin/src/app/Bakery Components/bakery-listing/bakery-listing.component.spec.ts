import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryListingComponent } from './bakery-listing.component';

describe('BakeryListingComponent', () => {
  let component: BakeryListingComponent;
  let fixture: ComponentFixture<BakeryListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakeryListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakeryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
