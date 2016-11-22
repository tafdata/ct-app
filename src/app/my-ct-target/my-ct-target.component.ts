import { Component, Input, OnChanges } from '@angular/core';

import { User } from '../user';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Mark } from '../mark';
import { Record } from '../record';
import { RegressionLineParam, RecordRange } from '../data'
import { DataService } from '../data.service';


// export class tableData{
//     itemName: string;
//     values: number[];
// }

    
@Component({
    selector: 'app-my-ct-target',
    templateUrl: './my-ct-target.component.html',
    styleUrls: ['./my-ct-target.component.css']
})

export class MyCtTargetComponent implements OnChanges {
    @Input() user: User;
    targetRecords: number[] = [6.80, 6.90, 7.00, 7.10];
    data: any = [];
    SP1: Item;
    SP2: Item;
    SP: Item[];
    
    constructor(
	private itemService: ItemService,
	private dataService: DataService,
    ) { }

    // Ct Target Table用データセット作成
    makeDataSetForCtTargetTable(sp: number){
	let range: RecordRange;
	let params: RegressionLineParam[] = [];
	let spItem: Item;
	let items: Item[] = [];

	console.log("makeDataSet...start");
	this.getSPItem(sp, this.itemService)
	    .then(response => {
		spItem = response;
		console.log(spItem);
		return this.getSPRecordRange(sp, this.dataService);
	    })
	    .then(response =>{
		range = response;
		console.log(range);
		return this.getRegressionLineParams(sp,this.dataService);
	    })
	    .then(response =>{
		params = response;
		console.log(params);
		return this.getItems(params, this.itemService);
	    })
	    .then(response => {
		items = response;
		console.log(items);
		return this.calcTargetMark(spItem,range,items,params);
	    })
	    .then(response => {
		console.log(response);
		this.data.push(response);
		console.log(this.data);
	    });
	
    }
    // 専門種目のItemを取得
    getSPItem(id: number, itemService: any): Promise<Item>{	
	return new Promise(function(resolve, reject){
	    resolve(itemService.getItem(id));
	});
    }
    // CT種目のItemリストを取得する
    getItems(params: RegressionLineParam[], itemService: any): Promise<Item[]>{
	return new Promise(function(resolve, reject){
	    let items: Item[] = [];
	    for(let param of params){
		items.push(itemService.getItem(param.itemId));
	    }
	    // 取得した配列をID順にソート
	    items.sort(function(a: Item, b: Item){
		if(a.id > b.id) return -1;
		else if (a.id < b.id) return 1;
		return 0;
	    });
	    resolve(items);
	});
    }
    // 専門種目の記録の区間を取得
    getSPRecordRange(sp: number, dataService: any): Promise<RecordRange>{
	return new Promise(function(resolve, reject){
		resolve(dataService.getRecordRangeById(sp));
	});
    }
    // 専門種目の回帰直線のパラメータを取得
    getRegressionLineParams(sp: number, dataService: any): Promise<RegressionLineParam[]>{
	return new Promise(function(resolve, reject){
	    resolve(dataService.getRegressionLineParamsBySp(sp));
	});
    }
    // 目標記録を計算
    calcTargetMark(spItem: Item, range: RecordRange, items: Item[], params: RegressionLineParam[]): Promise<any[]>{
	return new Promise(function(resolve, reject){
	    let dataset: any = [];
	    let x: number = range.min*100;
	    let xList: number[] = []; 

	    // 独立変数Xの配列を作成
	    // 計算は整数にして行う
	    while(x <= (range.max*100)){
		xList.push(x/100);
		x = Math.floor(x + range.step*100);
	    }
	    console.log(xList);
	    
	    for(let i: number=0;i<items.length;i++){
		let vals: number[] = [];
		for(let j:number=0;j<xList.length;j++){
		    vals.push(params[i].a * xList[j] + params[i].b);
		}
		dataset.push({
		    itemName: items[i].name,
		    values: vals,
		});
	    }

	    console.log(dataset);
	    resolve(dataset);
	});
    }
    
    
    ngOnChanges(changes: any) {
	
	this.SP1 = this.itemService.getItem(this.user.SP1);
	this.SP2 = this.itemService.getItem(this.user.SP2);

	this.makeDataSetForCtTargetTable(101);
	this.makeDataSetForCtTargetTable(102);

    }

}
