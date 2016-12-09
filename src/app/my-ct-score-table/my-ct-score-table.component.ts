import { Component, Input, OnInit } from '@angular/core';

import { Item }        from '../item';
import { ItemService } from '../item.service';
import { Mark }        from '../mark';
import { Record }      from '../record';


@Component({
    selector: 'app-my-ct-score-table',
    templateUrl: './my-ct-score-table.component.html',
    styleUrls: ['./my-ct-score-table.component.css']
})


export class MyCtScoreTableComponent implements OnInit {
    @Input() records: Record;
    items: Item[];
    data: any = [];
    
    constructor(
	private itemService: ItemService,
    ) {
	this.items = itemService.getItems();
    }

    //
    // recordとitemをパッケージする
    makeDataset(): void{
	for(let mark of this.records.records){
	    if(mark.mark > 0){　	    // 実施していない種目を除外
		this.getItemById(mark.id)
		    .then(response => {
			this.data.push({
			    item: response,
			    mark: mark,			
			});
		    });
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
    
    
    ngOnInit() {
	console.log("my-ct-score-table");
	//console.log(this.records);
	//console.log(this.items);
	this.makeDataset();
    }

}
