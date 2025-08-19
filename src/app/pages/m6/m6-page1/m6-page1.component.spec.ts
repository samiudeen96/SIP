import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M6Page1Component } from './m6-page1.component';

describe('M6Page1Component', () => {
  let component: M6Page1Component;
  let fixture: ComponentFixture<M6Page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M6Page1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M6Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
