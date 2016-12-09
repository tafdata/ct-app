import { Component, Input, OnChanges } from '@angular/core';

import { User }                     from '../user';
import { Item }                     from '../item';
import { ItemService }              from '../item.service';
import { Mark }                     from '../mark';
import { Record }                   from '../record';
import { RecordService }            from '../record.service';


@Component({
  selector: 'app-my-summary',
  templateUrl: './my-summary.component.html',
  styleUrls: ['./my-summary.component.css']
})
export class MySummaryComponent implements OnChanges {

    @Input() user: User;
    @Input() record: Record;
    mark: Mark;
    SP1: Item;
    SP2: Item;

    
    constructor(
	private itemService: ItemService,
	private recordService: RecordService,
    ) { }


    ngOnChanges(changes: any) {
	console.log("my-summary");
	//	console.log(this.record);
	// 総合結果を取得
	this.mark = this.record.records.find(mark => mark.id === 0);
	if(!this.mark){
	    this.mark = {"id": 0, "mark": 0, "name": "総合スコア", "rank": 0, "rankSP1": 0, "rankSP2": 0, "score": 0};
	}
	//	console.log(this.mark);
	
	if(this.user.SP1){
	    this.SP1 = this.itemService.getItem(this.user.SP1);
	}
	if(this.user.SP2){
	    this.SP2 = this.itemService.getItem(this.user.SP2);
	}
    }

}
