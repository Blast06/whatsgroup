import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageShellComponent } from './image-shell.component';

describe('ImageShellComponent', () => {
  let component: ImageShellComponent;
  let fixture: ComponentFixture<ImageShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageShellComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
