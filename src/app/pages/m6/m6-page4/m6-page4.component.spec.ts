import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M6Page4Component } from './m6-page4.component';

describe('M6Page4Component', () => {
  let component: M6Page4Component;
  let fixture: ComponentFixture<M6Page4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M6Page4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M6Page4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
