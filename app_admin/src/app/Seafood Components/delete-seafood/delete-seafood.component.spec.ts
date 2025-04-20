import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSeafoodComponent } from './delete-seafood.component';

describe('DeleteSeafoodComponent', () => {
  let component: DeleteSeafoodComponent;
  let fixture: ComponentFixture<DeleteSeafoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSeafoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSeafoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
