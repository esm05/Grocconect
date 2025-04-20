import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeatComponent } from './edit-meat.component';

describe('EditMeatComponent', () => {
  let component: EditMeatComponent;
  let fixture: ComponentFixture<EditMeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
