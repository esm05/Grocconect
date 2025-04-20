import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduceListingComponent } from './produce-listing.component';

describe('ProduceListingComponent', () => {
  let component: ProduceListingComponent;
  let fixture: ComponentFixture<ProduceListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduceListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
