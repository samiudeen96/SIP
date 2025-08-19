import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3Page1Component } from './m3-page1.component';

describe('M3Page1Component', () => {
  let component: M3Page1Component;
  let fixture: ComponentFixture<M3Page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3Page1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
