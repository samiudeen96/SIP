import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4Page3Component } from './m4-page3.component';

describe('M4Page3Component', () => {
  let component: M4Page3Component;
  let fixture: ComponentFixture<M4Page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4Page3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4Page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
