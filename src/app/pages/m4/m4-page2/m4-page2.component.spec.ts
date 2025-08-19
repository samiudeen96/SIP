import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4Page2Component } from './m4-page2.component';

describe('M4Page2Component', () => {
  let component: M4Page2Component;
  let fixture: ComponentFixture<M4Page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4Page2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
