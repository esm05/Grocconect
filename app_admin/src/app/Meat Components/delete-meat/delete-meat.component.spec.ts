import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMeatComponent } from './delete-meat.component';

describe('DeleteMeatComponent', () => {
  let component: DeleteMeatComponent;
  let fixture: ComponentFixture<DeleteMeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
