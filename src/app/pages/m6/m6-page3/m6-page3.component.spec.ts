import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M6Page3Component } from './m6-page3.component';

describe('M6Page3Component', () => {
  let component: M6Page3Component;
  let fixture: ComponentFixture<M6Page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M6Page3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M6Page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
