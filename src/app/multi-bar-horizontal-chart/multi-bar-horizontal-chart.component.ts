import { Component, OnInit } from '@angular/core';
import { nvD3 }                     from 'ng2-nvd3';
declare let d3, nv: any;

@Component({
  selector: 'app-multi-bar-horizontal-chart',
  templateUrl: './multi-bar-horizontal-chart.component.html',
  styleUrls: ['./multi-bar-horizontal-chart.component.css']
})
export class MultiBarHorizontalChartComponent implements OnInit {
    // ユーザ
    data: any = [
	{
	    "key": "男子",
	    "color": "#1f77b4",
	    "values": [
		{ 
		    "label" : "走幅跳" ,
		    "value" : 60
		} , 
		{ 
		    "label" : "三段跳" ,
		    "value" : 35
		} , 
		{ 
		    "label" : "走高跳" ,
		    "value" : 49
		}, 
		{ 
		    "label" : "棒高跳" ,
		    "value" : 20
		},
	    ]
	},
		{
	    "key": "女子",
	    "color": "#d62728",
	    "values": [
		{ 
		    "label" : "走幅跳" ,
		    "value" : 20
		} , 
		{ 
		    "label" : "三段跳" ,
		    "value" : 5
		} , 
		{ 
		    "label" : "走高跳" ,
		    "value" : 15
		}, 
		{ 
		    "label" : "棒高跳" ,
		    "value" : 8
		},
	    ]
	},
    ];

    // Chartの設定オブジェクト
    options;

    
    constructor() { }

    //
    // グラフ作成
    drawGraph(): void{
	this.options = {
	    chart: {
		type: 'multiBarHorizontalChart',
		height: 300,
		margin: {
		    top: 20,
		    right: 10,
		    bottom: 20,
		    left: 50,
		},
		x: function(d){return d.label;},
		y: function(d){return d.value;},
		showValues: true,
		showControls: true,
		valueFormat: function(d){
    	    	    return d3.format(',1d')(d);
    	    	},
		duration: 500,
		xAxis: {
		    showMaxMin: false,
		    axisDistance: 10,
		},
		yAxis: {
		    tickFormat: function(d){
		    	return d3.format('10d')(d);
		    },
		    axisDistance: -10,
		},
		legend: {
		    margin: {
			top: 10,
			right: 10,
			bottom: 10,
			left: 10,
		    },
		},
	    }
	};
    }

    ngOnInit() {
	this.drawGraph();
	
    }

}
