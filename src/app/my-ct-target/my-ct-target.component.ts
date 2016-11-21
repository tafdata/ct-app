import { Component, Input, OnChanges } from '@angular/core';

import { User } from '../user';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Mark } from '../mark';
import { Record } from '../record';
import { RegressionLineParam, RecordRange } from '../data'
import { DataService } from '../data.service';

@Component({
    selector: 'app-my-ct-target',
    templateUrl: './my-ct-target.component.html',
    styleUrls: ['./my-ct-target.component.css']
})

export class MyCtTargetComponent implements OnChanges {
    @Input() user: User;
    targetRecords: number[] = [6.80, 6.90, 7.00, 7.10];
    data: any[];
    SP1: Item;
    SP2: Item;
    SP: Item[];
    
    constructor(
	private itemService: ItemService,
	private dataService: DataService,
    ) { }

    // Ct Target Table用データセット作成
    makeDataSetForCtTarget(){

	
    }
    // 専門種目のItemを取得
    getSPItems(ids: number[], itemService: any): Promise<Item[]>{	
	return new Promise(function(resolve, reject){
	    let items: Item[] = [];
	    for(let id of ids){
		items.push(itemService.getItem(id));
	    }
	    resolve(items);
	});
    }
    // 専門種目の記録の区間を取得
    getSPRecordRange(sp: number, dataService: any): Promise<RecordRange[]>{
	return new Promise(function(resolve, reject){
		resolve(dataService.getRecordRangeById(sp));
	});
    }
    // 専門種目の回帰直線のパラメータを取得
    getRegressionLineParam(sp: number,itemId: number[], dataService: any): Promise<RegressionLineParam[]>{
	return new Promise(function(resolve, reject){
	    let params: RegressionLineParam[] = [];
	    for(let id of itemId){
		params.push(dataService.getRegressionLineParamByIds(sp, id));
	    }
	    resolve(params);
	});
    }
    // 目標記録を計算
    calcTargetMark(SP: Item, ranges: any, prams: any): Promise<any>{
	return new Promise(function(resolve, reject){
	    
	    resolve(0);
	});
    }
    
    
    ngOnChanges(changes: any) {
	this.data = [
	    { itemName: "スナッチ",values: [20,30,40,50]},
	    { itemName: "クリーン",values: [50,60,70,80]},
	    { itemName: "スクワット",values: [20,30,40,50]},
	];
	
	this.SP1 = this.itemService.getItem(this.user.SP1);
	this.SP2 = this.itemService.getItem(this.user.SP2);

	this.getSPItems([101, 102], this.itemService)
	    .then(items =>{
		console.log(items);
		return this.getRegressionLineParam(101, [1,2], this.dataService);
	    })
	    .then(param =>{
		console.log(param);		
	    })
	;

    }

}
