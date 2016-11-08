import { Component, OnInit } from '@angular/core';

import { User }        from '../user';
import { UserService } from '../user.service';


@Component({
    selector: 'app-overview-page',
    templateUrl: './overview-page.component.html',
    styleUrls: ['./overview-page.component.css'],
    providers: [ UserService ],
})
export class OverviewPageComponent implements OnInit {

    users: User[] = [];

    constructor(
    	private userService: UserService,
    ){}

    getUsers(): void{
    	this.userService.getUsers()
    	    .then(users => this.users = users);	
    }

    ngOnInit(): void{
    	// this.getUsers();
	this.userService.getUsers()
	    .then(users => this.users = users.slice(1,5));
    }

}
