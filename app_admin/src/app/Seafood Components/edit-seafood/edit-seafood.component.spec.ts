import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeafoodComponent } from './edit-seafood.component';

describe('EditSeafoodComponent', () => {
  let component: EditSeafoodComponent;
  let fixture: ComponentFixture<EditSeafoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSeafoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSeafoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
