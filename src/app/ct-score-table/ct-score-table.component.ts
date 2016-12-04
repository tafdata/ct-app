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
    userList: User[]; // 結果を表示するユーザーIDのリスト
    @Input() sex: string; // 性別(M/W)
    tbody: any = [];    //  tbody用データ
    thead: any = [];       // thead用データ

    constructor(
	private itemService: ItemService,
	private recordService: RecordService,
	private userService: UserService,
    ){}

    // thead用データを作成
    makeTHeadDataset(): Promise<any>{
	let items: Item[] = this.itemService.getItemsBySexAndTag(this.sex,"ct");
	return new Promise(function(resolve, reject){
	    resolve(items);
	});
    }

    
    // tbody用データの作成
    makeTBodyDataset(users: User[], thead: Item[]): any{
	let tbody: any = [];

	for(let user of users){
	    this.getMarksByUserId(user.id, this.recordService)
		.then(response => { // response: Mark[];
		    tbody.push(this.buildTBodyRecord(user, response, thead));
		});
	}
	console.log(tbody);
	return tbody;
    }
    getMarksByUserId(id: string, recordService: any): Promise<Mark[]>{
	return new Promise(function(resolve,reject){
	    resolve(recordService.getRecord(id).records);
	});
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
	console.log(this.sex);
	console.log(this.userList.length);
	this.makeTHeadDataset()
	    .then(response => {
		this.thead = response;
		this.tbody =  this.makeTBodyDataset(this.userList, response);
		console.log(this.tbody);
	    });

    }
    
}
