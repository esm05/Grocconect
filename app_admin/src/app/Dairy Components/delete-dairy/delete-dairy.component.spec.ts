import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDairyComponent } from './delete-dairy.component';

describe('DeleteDairyComponent', () => {
  let component: DeleteDairyComponent;
  let fixture: ComponentFixture<DeleteDairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDairyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
