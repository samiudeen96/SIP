import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4Page1Component } from './m4-page1.component';

describe('M4Page1Component', () => {
  let component: M4Page1Component;
  let fixture: ComponentFixture<M4Page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4Page1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
