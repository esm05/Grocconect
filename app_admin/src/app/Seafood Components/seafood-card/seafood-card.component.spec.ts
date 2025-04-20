import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafoodCardComponent } from './seafood-card.component';

describe('SeafoodCardComponent', () => {
  let component: SeafoodCardComponent;
  let fixture: ComponentFixture<SeafoodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeafoodCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeafoodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
