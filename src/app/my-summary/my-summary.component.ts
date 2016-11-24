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
    scoreMax: number = 10000;
    goalAvg: number = 0;
    SP1: Item;
    SP2: Item;

    
    constructor(
	private itemService: ItemService,
	private recordService: RecordService,
    ) { }


    ngOnChanges(changes: any) {
	// 総合結果を取得
	this.mark = this.record.records.find(mark => mark.id === 0);
 	this.goalAvg  = Math.floor((this.mark.score / this.scoreMax) * 1000) / 10;

	if(this.user.SP1){
	    this.SP1 = this.itemService.getItem(this.user.SP1);
	}
	if(this.user.SP2){
	    this.SP2 = this.itemService.getItem(this.user.SP2);
	}
    }

}
