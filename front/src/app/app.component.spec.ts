import { TestBed, async } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';

import { ChartModule } from 'angular-highcharts';


import { TextStatsComponent } from './text-stats/text-stats.component';
import { StatChartsComponent } from './stat-charts/stat-charts.component';
import { TextCountComponent } from './text-count/text-count.component';
import { AppRoutingModule } from './app-routing.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TextCountComponent,
        TextStatsComponent,
        StatChartsComponent
  
      ],
      imports: [
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ChartModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Onboarding Sicara'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Onboarding Sicara');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Onboarding Sicara');
  }));
});
