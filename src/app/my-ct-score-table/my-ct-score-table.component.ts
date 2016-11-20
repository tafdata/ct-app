import { Component, Input, OnChanges } from '@angular/core';

import { Mark }    from '../mark';
import { Record }  from '../record';


@Component({
    selector: 'app-my-ct-score-table',
    templateUrl: './my-ct-score-table.component.html',
    styleUrls: ['./my-ct-score-table.component.css']
})


export class MyCtScoreTableComponent implements OnChanges {
    @Input() records: Record;
    
    constructor() { }
    
    ngOnChanges(changes: any) {
	console.log("my-ct-score-table");
	console.log(this.records);
    }

}
