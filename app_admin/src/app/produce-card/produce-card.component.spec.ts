import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduceCardComponent } from './produce-card.component';

describe('ProduceCardComponent', () => {
  let component: ProduceCardComponent;
  let fixture: ComponentFixture<ProduceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
