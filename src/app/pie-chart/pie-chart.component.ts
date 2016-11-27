import { Component, Input, OnChanges } from '@angular/core';
import { nvD3 }                     from 'ng2-nvd3';
declare let d3: any;


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnChanges {
    // データ
    @Input() data: any;
    
    // Chartの設定オブジェクト
    options;
    
    
    constructor() { }
    
    ngOnChanges(changes: any) {
	console.log("pie-chart");
	console.log(this.data);

	this.options = {
	    chart: {
		type: 'pieChart',
		height: 300,
		x: function(d){return d.key;},
		y: function(d){return d.y;},
		showLabels: true,
		duration: 500,
		labelThreshold: 0.01,
		labelSunbeamLayout: false,
		legend: {
		    margin: {
			top: 10,
			right: 10,
			bottom: 10,
			left: 10,
		    }
		}
	    }
	}
    }
}


//
// dataPieChart: any = [
// 	{
// 	    key: "One",
// 	    y: 5
// 	},
// 	{
// 	    key: "Two",
// 	    y: 2
// 	},
// 	{
// 	    key: "Three",
// 	    y: 9
// 	},
// 	{
// 	    key: "Four",
// 	    y: 7
// 	},
// 	{
// 	    key: "Five",
// 	    y: 4
// 	},
// 	{
// 	    key: "Six",
// 	    y: 3
// 	},
// 	{
// 	    key: "Seven",
// 	    y: .5
// 	}
// ];
