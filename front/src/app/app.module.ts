import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { TextCountComponent } from './text-count/text-count.component';
import { AppRoutingModule } from './app-routing.module';
import { TextStatsComponent } from './text-stats/text-stats.component';
import { StatChartsComponent } from './stat-charts/stat-charts.component';

import { ChartModule } from 'angular-highcharts';

declare var require: any; 

@NgModule({
  declarations: [
    AppComponent,
    TextCountComponent,
    TextStatsComponent,
    StatChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
