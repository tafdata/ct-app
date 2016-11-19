import { Component, Input, OnChanges } from '@angular/core';

import { User }                     from '../user';

@Component({
  selector: 'app-my-summary',
  templateUrl: './my-summary.component.html',
  styleUrls: ['./my-summary.component.css']
})
export class MySummaryComponent implements OnChanges {

    @Input() user: User;
    scoreTotal: number = 4567;
    scoreMax: number = 10000;
    goalAvg: number;
    rankTotal: number = 15;
    SP1: string = "三段跳";
    SP2: string = "走幅跳";


    
  constructor() { }

    ngOnChanges() {
	this.goalAvg  = Math.floor((this.scoreTotal / this.scoreMax) * 1000) / 10;
    }

}
