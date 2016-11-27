/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultiBarHorizontalChartComponent } from './multi-bar-horizontal-chart.component';

describe('MultiBarHorizontalChartComponent', () => {
  let component: MultiBarHorizontalChartComponent;
  let fixture: ComponentFixture<MultiBarHorizontalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiBarHorizontalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiBarHorizontalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
