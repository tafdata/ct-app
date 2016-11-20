import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import { User }                     from '../user';
import { UserService }              from '../user.service';
import { Mark }                     from '../mark';

const MARKS: Mark[] = [
    {
	id: 1,
	name: "スナッチ",
	mark: 40,
	score: 670,
	rank: 5,
	rankSP1: 3,
	rankSP2: 0,
    },
    {
    	id: 2,
    	name: "クリーン",
    	mark: 62.5,
    	score: 789,
    	rank: 5,
    	rankSP1: 3,
    	rankSP2: -1,
    },
    {
    	id: 3,
    	name: "スクワット",
    	mark: 70,
    	score: 970,
    	rank: 2,
    	rankSP1: 3,
    	rankSP2: -1,
    },
    {
    	id: 4,
    	name: "立幅跳",
    	mark: 2.31,
    	score: 675,
    	rank: 5,
    	rankSP1: 3,
    	rankSP2: -1,
    },
    {
    	id: 5,
    	name: "立五段",
    	mark: 11.8,
    	score: 670,
    	rank: 5,
    	rankSP1: 3,
    	rankSP2: -1,
    }
];



@Component({
    selector: 'app-my-page',
    templateUrl: './my-page.component.html',
    styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

    user: User;
    users: User[] = [];
    data: any;
    dataTable = MARKS;

    
    constructor(
	private userService: UserService,
	private router: Router,
	private route: ActivatedRoute,
	private location: Location
    ) { }

    // 戻るボタン
    goBack(): void{
	this.location.back();
    }

    // 404リダイレクト
    go404Page(): void{
	this.router.navigate(['/404']);
    }


    //
    // nvD3用のデータセット整形
    //
    formatData(user: User): any{
	let key = "CTスコア",
	values = [];
	console.log("formatDataset");
	console.log(user);
	
	try{
	    console.log(user.ctMarks);
	    let counter=0;
	    for(let mark of user.ctMarks){
		values.push({
		    label: "no."+counter,
		    value: mark,
		});
		counter++;
	    }
	}
	catch(e){
	    console.log("Error: in formatData");
	    this.go404Page();
	}
	    
	return [{ key: key, values: values}];
    }

    ngOnInit(): void {
	this.route.params.forEach((params: Params) => {
	    let id = params['id'];
	    this.userService.getUser(id)
		.then(user => {
		    this.user = user;
		    this.data = this.formatData(this.user);
		});
	});
	this.userService.getUsers()
	    .then(users => this.users = users);
    }

    
}
