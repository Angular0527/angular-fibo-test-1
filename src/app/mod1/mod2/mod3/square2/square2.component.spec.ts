import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square2Component } from './square2.component';

describe('Square2Component', () => {
  let component: Square2Component;
  let fixture: ComponentFixture<Square2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
