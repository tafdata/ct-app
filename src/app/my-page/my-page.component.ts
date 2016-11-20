import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import { User }                     from '../user';
import { UserService }              from '../user.service';
import { Mark }                     from '../mark';
import { Record }                   from '../record';
import { RecordService }            from '../record.service';


@Component({
    selector: 'app-my-page',
    templateUrl: './my-page.component.html',
    styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

    user: User;
    records: Record;
    data: any;
    dataTable: any;

    
    constructor(
	private userService: UserService,
	private recordService: RecordService,
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
    formatData(record: Record): any{
	let key = "CTスコア",
	values = [];
	console.log("formatDataset");
	
	try{
	    console.log(record.records);
	    for(let mark of record.records){
		values.push({
		    label: mark.name,
		    value: mark.mark,
		});
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

		});
	    this.records = this.recordService.getRecord(id);
	});
	this.dataTable = this.records.records;
	this.data = this.formatData(this.records);
    }
    
}
