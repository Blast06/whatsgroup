import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup1 } from './signup-1.page';

describe('Signup1', () => {
  let component: Signup1;
  let fixture: ComponentFixture<Signup1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Signup1],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signup1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
