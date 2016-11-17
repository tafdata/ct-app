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

    user: User;
    users: User[] = [];
    data: any;
    
    constructor(
	private userService: UserService,
	private route: ActivatedRoute,
	private location: Location
    ) { }

    // 戻るボタン
    goBack(): void{
	this.location.back();
    }


    //
    // nvD3用のデータセット整形
    //
    formatData(user: User): any{
	let key = "Cumualtive Return",
	values = [];
	console.log("formatDataset");
	console.log(user);
	console.log(user.ctMarks);

	let counter=0;
	for(let mark of user.ctMarks){
	    console.log(mark);
	    values.push({
		label: "no."+counter,
		value: mark,
	    });
	    counter++;
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
//		    console.log(this.data);
		});
	});
	this.userService.getUsers()
	    .then(users => this.users = users);

	// 入力データ
	// this.data = [
	//     {
	// 	key: "Cumulative Return",
	// 	values: [
	// 	    {
	// 		"label" : "A",
	// 		"value" : 29.765957771107
	// 	    } ,
	// 	    {
	// 		"label" : "B" ,
	// 		"value" : 0
	// 	    } ,
	// 	    {
	// 		"label" : "C" ,
	// 		"value" : 32.807804682612
	// 	    } ,
	// 	    {
	// 		"label" : "D" ,
	// 		"value" : 196.45946739256
	// 	    } ,
	// 	    {
	// 		"label" : "E" ,
	// 		"value" : 0.19434030906893
	// 	    } ,
	// 	    {
	// 		"label" : "F" ,
	// 		"value" : 98.079782601442
	// 	    } ,
	// 	    {
	// 		"label" : "G" ,
	// 		"value" : 13.925743130903
	// 	    } ,
	// 	    {
	// 		"label" : "H" ,
	// 		"value" : 5.1387322875705
	// 	    }
	// 	]
	//     }
	// ];	
    }

    
}
