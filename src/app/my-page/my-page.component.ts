import { Component, Input, OnInit }         from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                         from '@angular/common';
import { CookieService }                    from 'angular2-cookie/core';
import { NgbModal, ModalDismissReasons }    from '@ng-bootstrap/ng-bootstrap';

import { User }                     from '../user';
import { UserService }              from '../user.service';
import { Item }                     from '../item';
import { ItemService }              from '../item.service';
import { Mark }                     from '../mark';
import { Record }                   from '../record';
import { RecordService }            from '../record.service';
import { Rival }                    from '../data'
import { DataService }              from '../data.service';


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
    rivalList: any;
    closeResult: string;
    
    constructor(
	private cookieService: CookieService,
	private router: Router,
	private route: ActivatedRoute,
	private location: Location,
	private userService: UserService,
	private dataService: DataService,
	private recordService: RecordService,
	private modalService: NgbModal,
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
		if(mark.id != 0 && mark.mark > 0){
		    values.push({
			itemId: mark.id,
			label: mark.name,
			value: Math.floor(mark.mark),
		    });
		}
	    }
	}
	catch(e){
	    console.log("Error: in formatData");
	    this.go404Page();
	}

	// 結果を格納
	return [{ key: key, values: values.sort(this.compareItemId)}];
    }
    // itemId順に並べ替え
    compareItemId(a:any, b:any): number{
	if(a.itemId < b.itemId) return -1;
	else if(a.itemId > b.itemId) return 1;
	return 0;
    }
    
    
    /************************************
     ** Ct Rival リスト取得 **
     *************************************/
    getRivals(id: string): void{
	this.rivalList = this.dataService.getRivalsByUserId(id);
    }

    /***********************
     **  Modal            **
     ***********************/
    open(content) {
    	this.modalService.open(content).result.then((result) => {
    	    this.closeResult = `Closed with: ${result}`;
    	}, (reason) => {
    	    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    	});
    }
    private getDismissReason(reason: any): string {
    	if (reason === ModalDismissReasons.ESC) {
    	    return 'by pressing ESC';
    	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    	    return 'by clicking on a backdrop';
    	} else {
    	    return  `with: ${reason}`;
    	}
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
		    this.getRivals(user.id);
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
