import { Component, Input, OnChanges } from '@angular/core';

import { User }                     from '../user';
import { UserService }              from '../user.service';
import { Item }                     from '../item';
import { ItemService }              from '../item.service';
import { Mark }                     from '../mark';
import { Record }                   from '../record';
import { RecordService }            from '../record.service';


@Component({
    //    moduleId: module.id,
    selector: 'app-ct-score-table',
    templateUrl: './ct-score-table.component.html',
    styleUrls: ['./ct-score-table.component.css']
})

export class CtScoreTableComponent implements OnChanges{
    @Input()
    userIdList: string[]; // 結果を表示するユーザーIDのリスト
    tbody: any = [];    //  tbody用データ
    thead: any = [];       // thead用データ

    constructor(
	private itemService: ItemService,
	private recordService: RecordService,
	private userService: UserService,
    ){}

    // thead用データを作成
    makeTHeadDataset(): Promise<any>{
	let items: Item[] = this.itemService.getItemsByTag("ct");
	return new Promise(function(resolve, reject){
	    resolve(items);
	});
    }

    
    // tbody用データの作成
    makeTBodyDataset(idList: string[], thead: Item[]): any{
	let records: any = this.recordService.getRecordsByUserIdList(idList);
	let tbody: any = [];

	for(let record of records){
	    this.userService.getUser(record.id)
		.then(response => {
		    tbody.push(this.buildTBodyRecord(response, record.records, thead));
		});
	}
	
	return tbody;
    }
    buildTBodyRecord(user: User, marks: Mark[], thead: Item[]): any{
	let vals: any = [];
	// theadに含まれている記録のみを選択
	for(let item of thead){
	    let mark: Mark;
	    if((mark = marks.find(obj => obj.id === item.id))){
		vals.push(mark);
	    }else{
		vals.push({
		    id: item.id,
		    mark: 0,
		    score: 0,
		});
	    }
	}
	return {
	    user: user,
	    score: marks.find(obj => obj.id === 0),
	    values: vals,
	};
	    

    }
    
    ngOnChanges(changes: any){
	this.makeTHeadDataset()
	    .then(response => {
		this.thead = response;
		this.tbody =  this.makeTBodyDataset(this.userIdList, response);
	    });

    }
    
}
