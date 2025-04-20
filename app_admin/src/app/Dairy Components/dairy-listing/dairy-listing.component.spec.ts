import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyListingComponent } from './dairy-listing.component';

describe('DairyListingComponent', () => {
  let component: DairyListingComponent;
  let fixture: ComponentFixture<DairyListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairyListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
