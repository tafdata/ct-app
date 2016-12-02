import { Component, Input, OnInit }         from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                         from '@angular/common';
import { CookieService }             from 'angular2-cookie/core';

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
	private cookieService: CookieService,
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
	console.log("Coolkie: "+this.cookieService.get("taf-ct-app-user-id"));
	this.route.params.forEach((params: Params) => {
	    let id = params['id'];
	    let cookieUserId = this.cookieService.get("taf-ct-app-user-id");
	    console.log("URL Param: "+id+", cookie:"+cookieUserId);

	    if(!id){ // URLにIDの指定がない
		if(cookieUserId){
		    id = cookieUserId;
		}else{ // ログイン情報もない
		    // ログイン画面にリダイレクト
		    this.router.navigate(['/login']);	
		}
	    }
	    // 指定されたユーザー情報の取得
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
