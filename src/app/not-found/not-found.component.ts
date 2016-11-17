import { Component } from '@angular/core';
import { Router }    from '@angular/router';
import { Location }          from '@angular/common';



@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent{

    constructor(
	private location: Location,
	private router: Router,
    ) { }

    // 戻るボタン
    goBack(): void{
	this.location.back();
    }

    // Homeへ
    goLoginPage(): void{
	this.router.navigate(['/login']);
    }
    
}
