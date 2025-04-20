import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatListingComponent } from './meat-listing.component';

describe('MeatListingComponent', () => {
  let component: MeatListingComponent;
  let fixture: ComponentFixture<MeatListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeatListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeatListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
