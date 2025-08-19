import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3Page4Component } from './m3-page4.component';

describe('M3Page4Component', () => {
  let component: M3Page4Component;
  let fixture: ComponentFixture<M3Page4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3Page4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3Page4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
