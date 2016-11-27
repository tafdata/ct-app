import { Component, Input, OnInit } from '@angular/core';
import { nvD3 }                     from 'ng2-nvd3';
declare let d3, nv: any;


@Component({
  selector: 'app-multi-bar-chart',
  templateUrl: './multi-bar-chart.component.html',
  styleUrls: ['./multi-bar-chart.component.css']
})
export class MultiBarChartComponent implements OnInit {
    // Chartの設定オブジェクト
    options: any;
    @Input() data: any;

    // ** Format **
    // data = [
    // 	{
    // 	    key: "seriese1",
    // 	    values: [{x:0,y:3},{x:1,y:2},{x:3,y:4}],
    // 	}
    // ];
        
    constructor() { }

    drawGraph(): void{
	// グラフの設定
	this.options = {
	    chart: {
		type: 'multiBarChart',
		height: 300,
		margin : {
		    top: 20,
		    right: 10,
		    bottom: 40,
		    left: 45
		},
		clipEdge: true,
		staggerLabels: true,
		duration: 500,
		stacked: true,
		xAxis: {
		    axisLabel: '記録',
		    showMaxMin: false,
		    tickFormat: function(d){
			return d3.format(',f')(d);
		    }
		},
		yAxis: {
		    axisLabel: '人数[人]',
		    axisLabelDistance: -20,
		    tickFormat: function(d){
			return d3.format(',.1f')(d);
		    }
		}
	    }
	};
    }

    ngOnInit() {
	console.log(this.data);
	this.drawGraph();	
    }

}
