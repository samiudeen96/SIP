import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3Page3Component } from './m3-page3.component';

describe('M3Page3Component', () => {
  let component: M3Page3Component;
  let fixture: ComponentFixture<M3Page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3Page3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3Page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
