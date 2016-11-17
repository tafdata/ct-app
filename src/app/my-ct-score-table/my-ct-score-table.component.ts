import { Component, Input, OnChanges } from '@angular/core';

import { Mark }    from '../mark';


@Component({
    selector: 'app-my-ct-score-table',
    templateUrl: './my-ct-score-table.component.html',
    styleUrls: ['./my-ct-score-table.component.css']
})


export class MyCtScoreTableComponent implements OnChanges {
    @Input("dataMyCtScore") data: any;
    
    constructor() { }
    
    ngOnChanges(changes: any) {
	console.log("my-ct-score-table");
	console.log(this.data);
    }

}
