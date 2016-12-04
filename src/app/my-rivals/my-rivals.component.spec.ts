/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyRivalsComponent } from './my-rivals.component';

describe('MyRivalsComponent', () => {
  let component: MyRivalsComponent;
  let fixture: ComponentFixture<MyRivalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRivalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
