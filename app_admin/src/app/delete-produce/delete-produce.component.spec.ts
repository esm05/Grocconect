import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProduceComponent } from './delete-produce.component';

describe('DeleteProduceComponent', () => {
  let component: DeleteProduceComponent;
  let fixture: ComponentFixture<DeleteProduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProduceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
