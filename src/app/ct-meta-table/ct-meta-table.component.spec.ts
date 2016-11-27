/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtMetaTableComponent } from './ct-meta-table.component';

describe('CtMetaTableComponent', () => {
  let component: CtMetaTableComponent;
  let fixture: ComponentFixture<CtMetaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtMetaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtMetaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
