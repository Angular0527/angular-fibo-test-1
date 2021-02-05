import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square5Component } from './square5.component';

describe('Square5Component', () => {
  let component: Square5Component;
  let fixture: ComponentFixture<Square5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
