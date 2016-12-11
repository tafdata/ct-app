import { Component, Input, OnChanges } from '@angular/core';
import { Router }                   from '@angular/router';

import { User }              from '../user';
import { UserService }       from '../user.service';
import { RecordService }     from '../record.service';
import { Item }              from '../item';
import { ItemService }       from '../item.service';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css']
})
export class RankingPageComponent implements OnChanges {
    // ログイン情報
    @Input() user: User;

    // 変数
    SP: Item;
    CT: Item;
    itemSP: Item[];
    itemCT: Item[];
    optionSP: Item[];
    optionCT: Item[];
    tbodySP: any = [];
    tbodyCT: any = [];
    sex: string;
    
    constructor(
	private itemService: ItemService,
	private recordService: RecordService,
	private userService: UserService,
	private router: Router,
    ) {
	this.itemSP = this.itemService.getItemsByTag("sp");
	this.itemCT = this.itemService.getItemsByTag("ct");
    }

    //
    // tbodyを作成
    makeTbody(item: Item, marks: any): Promise<any>{
	let tbody: any = [];
	
	for(let mark of marks){
//	    console.log(mark);
	    this.userService.getUser(mark.userId)
		.then(response => { // User
		    // 男子/女子の記録だけを抽出
		    if(response.sex === this.sex){
			tbody.push({ user: response, mark: mark});
		    }
		});
	}

	return Promise.resolve(tbody);
    }

    
    //
    // 専門種目の切り替え
    changeSP(item: Item): void{
	this.SP = item;
	this.getRecordAndUserIdByItemId(item.id)
	    .then(response => {
		// {userId: record.id,itemId: mark.id,mark: mark}
		//		console.log(response);
		return this.makeTbody(item, response)
	    })
	    .then(response => { // tbody
		this.tbodySP = response;;
		//		console.log(this.tbodySP);
	    });
    }

    //
    // CT種目の切り替え
    changeCT(item: Item): void{
	this.CT = item;
	this.getRecordAndUserIdByItemId(item.id)
	    .then(response => {
		// {userId: record.id,itemId: mark.id,mark: mark,}
		//console.log(response);
		return this.makeTbody(item, response)
	    })
	    .then(response => { // tbody
		this.tbodyCT = response;
		//		console.log(this.tbodyCT);
	    });
    }

    
    //
    // 性別の切り替え
    changeSex(sex: string): void{
	// 性別の更新
	this.sex = sex;
	// 専門種目の切り替え
	this.optionSP = [];
	for(let sp of this.itemSP){
	    if(sp.tag.indexOf(sex) >= 0){
		this.optionSP.push(sp);
	    }
	}
	//	console.log(this.optionSP);
	this.SP = this.optionSP[0];
	this.changeSP(this.SP);
	
	// CT種目の切り替え
	this.optionCT = [];
	for(let ct of this.itemCT){
//	    console.log(ct);
	    if(ct.tag.indexOf(sex) >= 0){
		this.optionCT.push(ct);
	    }
	}
	console.log(this.optionCT);
	this.CT = this.optionCT[0];
	this.changeCT(this.CT);
    }


    //
    // My Pageへ移動
    gotoMyPage(user: User): void{
	this.router.navigate(['/mypage', user.id]);
    }

    //
    // Data Access
    getRecordAndUserIdByItemId(id: number): Promise<any>{
	return Promise.resolve(this.recordService.getRecordAndUserIdByItemId(id));
    }


    
    ngOnChanges(changes: any) {
	//console.log(this.user);
	if(this.user){
	    this.changeSex(this.user.sex);
	}
    }

}
