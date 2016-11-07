/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtScoreTableComponent } from './ct-score-table.component';

describe('CtScoreTableComponent', () => {
  let component: CtScoreTableComponent;
  let fixture: ComponentFixture<CtScoreTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtScoreTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtScoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
