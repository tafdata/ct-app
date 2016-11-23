import { Component, OnInit }      from '@angular/core';
import { Location }               from '@angular/common';


@Component({
    selector: 'app-team-page',
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

    constructor(
	private location: Location,
    ) { }

    //
    // 戻るボタン
    goBack(): void{
	this.location.back();
    }
    
    ngOnInit() {
    }

}
