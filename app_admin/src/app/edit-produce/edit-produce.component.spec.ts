import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProduceComponent } from './edit-produce.component';

describe('EditProduceComponent', () => {
  let component: EditProduceComponent;
  let fixture: ComponentFixture<EditProduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProduceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
