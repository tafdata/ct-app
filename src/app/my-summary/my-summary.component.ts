import { Component, Input, OnChanges } from '@angular/core';

import { User }                     from '../user';

@Component({
  selector: 'app-my-summary',
  templateUrl: './my-summary.component.html',
  styleUrls: ['./my-summary.component.css']
})
export class MySummaryComponent implements OnChanges {

    @Input() user: User;
    

    
  constructor() { }

    ngOnChanges() {
	console.log(this.user);
    }

}
