import { Component, Input, OnInit } from '@angular/core';

import { User }                     from '../user';
import { UserService }              from '../user.service';
import { Item }                     from '../item';
import { ItemService }              from '../item.service';
import { Mark }                     from '../mark';
import { Record }                   from '../record';
import { RecordService }            from '../record.service';
import { Rival }                    from '../data'


@Component({
    selector: 'app-my-rivals',
    templateUrl: './my-rivals.component.html',
    styleUrls: ['./my-rivals.component.css']
})
export class MyRivalsComponent implements OnInit{
    @Input() user: User;
    @Input() rivalList: Rival[];

    // リスト作成用
    itemSP: Item[];
    itemCT: Item[];     // CT種目
    rivalUsers: User[];
    records: Record[] = [];  // 記録
    flgRivals: boolean = false;
    dataTableRivals: any = []; // CTライバルテーブル用データ
    // 表作成用
    tbody: any = [];    // tbody用データ
    thead: any = [];    // thead用データ


    constructor(
	private itemService: ItemService,
	private recordService: RecordService,
	private userService: UserService,
    ) {
	this.itemSP = itemService.getItemsByTag("sp");
    }

    /************************************
     ** Ct Rival Table用データセット作成 **
     *************************************/
    makeDataset(rivals: Rival, thead: Item[]): void{
	let users: User[] = [];
	let records: Record[] = [];
	let spItem: Item;
	let tbody: any;

	this.getItem(rivals.sp) // 専門種目の取得
	    .then(response => { // Item(sp)
		spItem = response;
		return 	this.userService.getUsersByIdList(rivals.rivalsId);
	    }) // ライバルユーザーのリストを取得
	    .then(response => { // User[]
		users = response;
		return this.getRecordsOfRivals(rivals);
	    }) // ライバルの記録を取得
	    .then(response => { // Record[]
		records = response;
		return this.makeTBodyDataset(users, records, thead);
	    }) // tbodyを作成
	    .then(response => { // tbody
		console.log(response);
		// データを格納
		this.dataTableRivals.push({
		    spItem: spItem,
		    thead: thead,
		    tbody: response,
		});
	    });
    }

    getRecordsOfRivals(rivals: Rival): Promise<Record[]>{
	let recordService = this.recordService;
	
	return new Promise(function(resolve,reject){
	    let records: Record[] = [];
	    
	    for(let userId of rivals.rivalsId){
		records.push(recordService.getRecord(userId));
	    }
	    resolve(records);
	});
    }

    
    /************************************
     **  表作成                 **
     *************************************/
    // tbody用データの作成
    makeTBodyDataset(users: User[],records: Record[], thead: Item[]): Promise<any>{
	let tbody: any = [];
	
	for(let user of users){
	    let record = records.find(obj => obj.id === user.id);
	    tbody.push(this.buildTBodyRecord(user, record.records, thead));	  
	}
	
	return new Promise(function(resolve,reject){
	    resolve(tbody);
	});
    }
    buildTBodyRecord(user: User, marks: Mark[], thead: Item[]): any{
	let vals: any = [];
	let totalScore = marks.find(obj => obj.id === 0);

	// Total Scoreがないとき
	if(!totalScore){
	    totalScore = {"id": 0, "mark": 0, "name": "総合スコア", "rank": 0, "rankSP1": 0, "rankSP2": 0, "score": 0};
	}
	
	// theadに含まれている記録のみを選択
	for(let item of thead){
	    let mark = marks.find(obj => obj.id === item.id);
	    if(mark){
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
	    score: totalScore,
	    values: vals,
	};
    }

    /***********************
     **  データアクセス     **
     ***********************/
    getItemsBySexAndTag(sex: string, tag: string): Promise<Item[]>{
	let itemService = this.itemService;
	return new Promise(function(resolve,reject){
	    resolve(itemService.getItemsBySexAndTag(sex,tag));
	});
    }
    getItem(id: number): Promise<Item>{
	let itemService = this.itemService;

	return new Promise(function(resolve, reject){
	    resolve(itemService.getItem(id));
	});
    }
    
    
    ngOnInit() {
	console.log("my-rivals");
	//	console.log(this.rivalList);
	// CT種目取得
	this.getItemsBySexAndTag(this.user.sex,"ct")
	    .then(response => {
		this.itemCT =  response;
		// 専門種目ごとに処理
		for(let rivals of this.rivalList){
		    // 目標データのデータセット作成
		    console.log(rivals);
		    this.makeDataset(rivals, response);
		}
	    });
    }

}
