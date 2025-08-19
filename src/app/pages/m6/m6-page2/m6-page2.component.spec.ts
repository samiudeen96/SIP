import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M6Page2Component } from './m6-page2.component';

describe('M6Page2Component', () => {
  let component: M6Page2Component;
  let fixture: ComponentFixture<M6Page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M6Page2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M6Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
