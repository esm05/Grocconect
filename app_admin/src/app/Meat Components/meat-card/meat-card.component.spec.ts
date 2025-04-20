import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatCardComponent } from './meat-card.component';

describe('MeatCardComponent', () => {
  let component: MeatCardComponent;
  let fixture: ComponentFixture<MeatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeatCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
