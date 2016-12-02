import { Component, Input, OnInit }         from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                         from '@angular/common';

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
    // ユーザー情報
    user: User;

    // ローカル変数
    records: Record;
    data: any;
    
    constructor(
	private userService: UserService,
	private recordService: RecordService,
	private router: Router,
	private route: ActivatedRoute,
	private location: Location
    ) {	}

    

    // Promiseで
    getRecord(id: string, recordService: any): Promise<any>{
	return new Promise(function(resolve, reject){
	    resolve(recordService.getRecord(id));
	});
    }
    
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
    formatData(records: Record): any{
	let key = "CTスコア",
	values = [];
	console.log("formatDataset");
	
	try{
	    for(let mark of records.records){
		if(mark.id != 0){
		    values.push({
			label: mark.name,
			value: mark.mark,
		    });
		}
	    }
	}
	catch(e){
	    console.log("Error: in formatData");
	    this.go404Page();
	}

	// 結果を格納
	return [{ key: key, values: values}];
    }

    ngOnInit(): void {
	console.log("User: ");
	console.log(this.userService.getLoginUser());
	this.route.params.forEach((params: Params) => {
	    let id = params['id'];
	    this.userService.getUser(id)
		.then(user => {
		    this.user = user;
		});
	    this.getRecord(id, this.recordService)
	    	.then(records => {
	    	    console.log(records);
	    	    this.records = records;
	    	    this.data = this.formatData(records);
	    	});	    
	});
    }
    
}
