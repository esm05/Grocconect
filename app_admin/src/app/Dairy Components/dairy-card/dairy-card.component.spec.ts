import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyCardComponent } from './dairy-card.component';

describe('DairyCardComponent', () => {
  let component: DairyCardComponent;
  let fixture: ComponentFixture<DairyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
