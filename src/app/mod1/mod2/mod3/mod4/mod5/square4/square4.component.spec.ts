import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square4Component } from './square4.component';

describe('Square4Component', () => {
  let component: Square4Component;
  let fixture: ComponentFixture<Square4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
