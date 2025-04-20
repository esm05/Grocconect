import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafoodListingComponent } from './seafood-listing.component';

describe('SeafoodListingComponent', () => {
  let component: SeafoodListingComponent;
  let fixture: ComponentFixture<SeafoodListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeafoodListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeafoodListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
