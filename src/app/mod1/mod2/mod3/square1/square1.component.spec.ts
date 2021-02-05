import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square1Component } from './square1.component';

describe('Square1Component', () => {
  let component: Square1Component;
  let fixture: ComponentFixture<Square1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
