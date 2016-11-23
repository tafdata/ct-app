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
    dataTargetMarks: any = []; // CT目標記録テーブル用データ
    dataTableRivals: string[] = ["OSK14326","OSK14001","OSK15003"]; // CTライバルテーブル用データ

    
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

	this.getSPItem(sp, this.itemService)
	    .then(response => {
		spItem = response;
		return this.getSPRecordRange(sp, this.dataService);
	    })
	    .then(response =>{
		range = response;
		return this.getRegressionLineParams(sp,this.dataService);
	    })
	    .then(response =>{
		params = response;
		return this.getItems(params, this.itemService);
	    })
	    .then(response => {
		items = response;
		return this.calcTargetMark(spItem,range,items,params);
	    })
	    .then(response => {
		this.dataTargetMarks.push(response);
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
	    
	    for(let i: number=0;i<items.length;i++){
		let vals: number[] = [];
		for(let j:number=0;j<xList.length;j++){
		    vals.push(params[i].a * xList[j] + params[i].b);
		}
		dataset.push({
		    itemName: items[i].name, // CT種目名
		    itemUnit: items[i].unit, // CT種目の単位
		    values: vals, // 記録の配列
		});
	    }
	    resolve({
		spName: spItem.name, // 専門種目名
		spUnit: spItem.unit, // 専門種目の単位
		x: xList, // 目標記録(独立変数X)
		data: dataset, // CT項目名&単位&目標記録
	    });
	});
    }
    
    
    ngOnChanges(changes: any) {
	// 目標データのデータセット作成
	if(this.user.SP1){ this.makeDataSetForCtTargetTable(this.user.SP1); }
	if(this.user.SP2){ this.makeDataSetForCtTargetTable(this.user.SP2); }
	
    }

}
