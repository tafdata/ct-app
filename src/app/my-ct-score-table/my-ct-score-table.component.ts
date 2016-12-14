import { Component, Input, OnChanges } from '@angular/core';

import { User }        from '../user';
import { Item }        from '../item';
import { ItemService } from '../item.service';
import { Mark }        from '../mark';
import { Record }      from '../record';


@Component({
    selector: 'app-my-ct-score-table',
    templateUrl: './my-ct-score-table.component.html',
    styleUrls: ['./my-ct-score-table.component.css']
})


export class MyCtScoreTableComponent implements OnChanges {
    @Input() records: Record;
    @Input() user: User;
    items: Item[];
    data: any = [];
    totalScore: Mark;
    SP1: Item;
    SP2: Item;
    
    constructor(
	private itemService: ItemService,
    ) {
	this.items = itemService.getItems();
    }

    //
    // recordとitemをパッケージする
    makeDataset(): void{
	// データセットを初期化
	this.data = [];
	for(let mark of this.records.records){
	    if(mark.mark > 0){ // 実施していない種目を除外
		if(mark.id == 0){
		    this.totalScore = mark;
		}else{
		    this.getItemById(mark.id)
			.then(response => {
			    this.data.push({
				item: response,
				mark: mark,			
			    });
			});
		}
	    }
	}
	//	console.log(this.data);
    }
    //
    //
    getItemById(id: number): Promise<Item>{
	let item = this.items.find(item => item.id === id);
	return Promise.resolve(item);
    }
    
    
    ngOnChanges(changes: any) {
	console.log("my-ct-score-table");
	//console.log(this.records);
	//console.log(this.items);
	this.makeDataset();
	console.log(this.user);
	if(this.user){
	    if(this.user.SP1){ this.SP1 = this.items.find(item => item.id === this.user.SP1);}
	    if(this.user.SP2){ this.SP2 = this.items.find(item => item.id === this.user.SP2);}
	}

	console.log(this.SP1);
	console.log(this.SP2);
    }

}
