import { Component, Input, OnChanges } from '@angular/core';

import { User } from '../user';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Mark } from '../mark';
import { Record } from '../record';

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
    
    
    constructor(
	private itemService: ItemService,
    ) { }


    ngOnChanges(changes: any) {
	this.data = [
	    { itemName: "スナッチ",values: [20,30,40,50]},
	    { itemName: "クリーン",values: [50,60,70,80]},
	    { itemName: "スクワット",values: [20,30,40,50]},
	];
	
	this.SP1 = this.itemService.getItem(this.user.SP1);
	this.SP2 = this.itemService.getItem(this.user.SP2);
    }

}
