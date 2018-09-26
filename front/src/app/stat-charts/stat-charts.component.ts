import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-stat-charts',
  templateUrl: './stat-charts.component.html',
  styleUrls: ['./stat-charts.component.css']
})
export class StatChartsComponent implements OnInit {
	@Input() xVals
	@Input() yVals

	chart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stats of the text'
    },
    xAxis: {
    	categories:this.xVals,
    	title : {text:'Letter'}

    },
    yAxis: {
    	min:0,
    	title: {text:'Occurences'}
    },
    series:[{data:this.yVals}]
  });

	redrawChart(){
		console.log(this.yVals)
		console.log(this.xVals)
		this.chart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stats of the text'
    },
    xAxis: {
    	categories:this.yVals,
    	title : {text:'Letter'}

    },
    yAxis: {
    	min:0,
    	title: {text:'Occurences'}
    },
    series:[{data:this.xVals}]
  });
	}

  constructor() { }

  ngOnInit() {
  	console.log(this.yVals)
  	console.log(this.xVals)
  	}

}
