import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square3Component } from './square3.component';

describe('Square3Component', () => {
  let component: Square3Component;
  let fixture: ComponentFixture<Square3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
