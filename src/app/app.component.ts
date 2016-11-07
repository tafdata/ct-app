import { Component, OnInit } from '@angular/core';

import { User }        from './user';
import { UserService } from './user.service';


@Component({
//    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ UserService ],
})
export class AppComponent {
    title = 'Coach-X';

    users: User[];
    selectedUser: User;

    constructor(
	private userService: UserService,
    ){}

    getUsers(): void{
	this.userService.getUsers()
	    .then(users => this.users = users);	
    }

    ngOnInit(): void{
	this.getUsers();
    }
    
}
