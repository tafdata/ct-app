/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtScoreChartComponent } from './ct-score-chart.component';

describe('CtScoreChartComponent', () => {
  let component: CtScoreChartComponent;
  let fixture: ComponentFixture<CtScoreChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtScoreChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtScoreChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
