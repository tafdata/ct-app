import { Component, Input, OnChanges } from '@angular/core';
import { nvD3 }                     from 'ng2-nvd3';
declare let d3: any;

import { User }              from '../user';


@Component({
    selector: 'app-ct-score-chart',
    templateUrl: './ct-score-chart.component.html',
    styleUrls: ['./ct-score-chart.component.css']
})
export class CtScoreChartComponent implements OnChanges {
    // ユーザ
    @Input() data: any;

    // Chartの設定オブジェクト
    options;

    constructor() { }



    ngOnChanges(changes: any){
	console.log("ct-score-chart");
	console.log(this.data);
	
	// グラフの設定
    	this.options = {
    	    chart: {
    	    	type: 'discreteBarChart',
    	    	height: 200,
    	    	margin: {
    	    	    top: 20,
    	    	    right: 20,
    	    	    bottom: 20,
    	    	    left: 30,
    	    	},
    	    	x: function(d){return d.label;},
    	    	y: function(d){return d.value;},
    	    	showValues: true,
		showControls: false,
    	    	valueFormat: function(d){
    	    	    return d3.format(',.1d')(d);
    	    	},
    	    	duration: 500,
		xAxis: {
		    axisDistance: 10,
		},
    	    	yAxis: {
    	    	    axisLabelDistance: -10,
    	    	}
    	    }
    	}
    }
    
}
