import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { User }                     from '../user';
import { UserService }              from '../user.service';


@Component({
    selector: 'app-my-page',
    templateUrl: './my-page.component.html',
    styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

    @Input() user: User;
    users: User[] = [];
    
    constructor(
	private userService: UserService,
	private route: ActivatedRoute,
	private location: Location
    ) { }

    // 戻るボタン
    goBack(): void{
	this.location.back();
    }


    ngOnInit(): void {
	this.route.params.forEach((params: Params) => {
	    let id = params['id'];
	    this.userService.getUser(id)
		.then(user => this.user = user);
	});
	this.userService.getUsers()
	    .then(users => this.users = users);
    }

    
}
