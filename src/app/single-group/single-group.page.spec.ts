import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGroupPage } from './single-group.page';

describe('SingleGroupPage', () => {
  let component: SingleGroupPage;
  let fixture: ComponentFixture<SingleGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
