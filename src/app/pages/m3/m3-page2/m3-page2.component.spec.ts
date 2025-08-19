import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3Page2Component } from './m3-page2.component';

describe('M3Page2Component', () => {
  let component: M3Page2Component;
  let fixture: ComponentFixture<M3Page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3Page2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
