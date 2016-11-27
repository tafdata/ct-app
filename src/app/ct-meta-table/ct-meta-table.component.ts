import { Component,Input, OnInit } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-ct-meta-table',
  templateUrl: './ct-meta-table.component.html',
  styleUrls: ['./ct-meta-table.component.css']
})
export class CtMetaTableComponent implements OnInit {
//    @Input() data: any;
    @Input() thead: any;
    @Input() tbody: any;
    
    constructor() { }

    ngOnInit() {
	// this.thead = data.thead;
	// this.tbody = data.tbody;
	console.log(this.thead);
    }

}
