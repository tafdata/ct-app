import { Component } from '@angular/core';
//import { ActivatedRoute }    from '@angular/router';
import { Location }          from '@angular/common';



@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent{

    constructor(
	private location: Location,
    ) { }

    // 戻るボタン
    goBack(): void{
	this.location.back();
    }
    
}
