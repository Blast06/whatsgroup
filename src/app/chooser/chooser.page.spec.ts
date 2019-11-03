import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooserPage } from './chooser.page';

describe('ChooserPage', () => {
  let component: ChooserPage;
  let fixture: ComponentFixture<ChooserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
