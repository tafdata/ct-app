import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { Router }            from '@angular/router';
import { CookieService }     from 'angular2-cookie/core';
import { NgbModal, ModalDismissReasons }    from '@ng-bootstrap/ng-bootstrap';

import { User }        from '../user';
import { UserService } from '../user.service';
import { Item }        from '../item';
import { ItemService } from '../item.service';
import { CtMeta, Correlation, Histgram }  from '../data';
import { DataService } from '../data.service';
import { Team }        from '../team';
import { TeamService } from '../team.service';

@Component({
    selector: 'app-overview-page',
    templateUrl: './overview-page.component.html',
    styleUrls: ['./overview-page.component.css'],
    providers: [ UserService ],
})
export class OverviewPageComponent implements OnInit {
    // ログイン情報
    user: User;

    // ローカル変数
    flgReady: boolean = false;  // データセットが準備完了したか？
    sex: string;	// 表示選択(性別)
    itemCT: Item[]; // CT種目
    itemSP: Item[]  // 専門種目
    teams: Team[];
    metaData: CtMeta[];
    correlations: Correlation[]; // 相関係数
    histgram: Histgram[]; // ヒストグラム用データセット
    itemHistgram: Item;   // ヒストグラムで扱っている項目
    dataOverview: any; // Overview    
    dataCorrelation: any; // = { thead: [], tbody: {}};  相関係数
    dataHistgram: any;
    dataPieChart: any = [];
    dataBarChart: any;
    closeResult: string;
    
    constructor(
	private cookieService: CookieService,
	private location:    Location,
	private router:      Router,
	private modalService: NgbModal,
    	private userService: UserService,
	private itemService: ItemService,
	private dataService: DataService,
	private teamService: TeamService,
    ){

	this.itemSP = itemService.getItemsByTag("sp");
	this.metaData = dataService.getCtMeta();
	this.correlations = dataService.getCorrelations();
	this.histgram = dataService.getHistgram();
	this.teams = teamService.getTeams();
    }


    //
    // データの取得
    //
    getItem(id: number): Item{
	return this.itemCT.find(item => item.id === id);
    }
    
    getItemsBySex(sex: string, itemService: any): Promise<Item[]>{
	return new Promise(function(resolve, reject){
	    resolve(itemService.getItemsBySexAndTag(sex, "ct"));
	});
    }
    getCtMeta(id: number): CtMeta{
	return this.metaData.find(meta => meta.itemId === id);
    }

    //
    // 参加人数表用のデータセット作成
    makeDataForPieChart(): void{
	console.log("makeDataForPieChart()");
	this.dataPieChart = this.dataService.getBarChartById("overview-pie-chart").data;
	//console.log(this.dataPieChart);
    }
    makeDataForMultiBarChart(): void{
	console.log("makeDataForMultiBarChart()");
	this.dataBarChart = this.dataService.getBarChartById("overview-participant").data;
    }


    //
    // Overview用データセット
    makeDataForOverviewTable(itemCT: Item[]): void{
	console.log("makeDataForOverviewTable()");
	//
	let tbody: any = [];
	for(let item of itemCT){
	    let meta = this.getCtMeta(item.id);
	    //console.log(meta);
	    if(meta){
		tbody.push({
		    item: item,
		    avg: meta.avg,
		    max: meta.max,
		    sd: Math.sqrt(meta.variance),
		    N: meta.N,
		});
	    }
	}


	this.dataOverview = tbody;
	//console.log(this.dataOverview);
    }

    //
    // ヒストグラム用
    setDataForHistgram(item: Item): any{
	console.log("setDataForHistgram: "+item.id);
	let values = this.histgram.find(data => data.itemId === item.id);
	this.itemHistgram = item;

	if(!values){
	    values = {itemId: item.id, values: []};
	}
	
	this.dataHistgram = [{
	    key: item.name,
	    values: values.values,
	}];		
    }

    
    //
    // 相関係数用データセット
    makeDataForCorrelationTable(itemCT: Item[]): void{
	console.log("makeDataForCorrelationTable()");
	let thead: any[] = [
	    {head:"走幅跳"},{head:"三段跳"},{head:"走高跳"},{head:"棒高跳"}
	];
	let tbody: any = [];

	for(let item of itemCT){
	    let cor = this.getCorrelationByItemId(item.id);
	    //	    console.log(cor);
	    if(cor){
		tbody.push({
		    item: item,
		    values: cor.values,
		});
	    }
	}
	// console.log(tbody);
	this.dataCorrelation = {
	    thead: thead,
	    tbody: tbody,
	}
    }
    getCorrelationByItemId(id: number): Correlation{
	return   this.correlations.find(val => val.itemId === id);
    }


    //
    // 戻るボタン
    goBack(): void{
	console.log("goBack()")
	this.location.back();	
    }

    //
    // 性別を切り替え
    changeSex(sex: string): void{
	console.log("changeSex(): "+sex);
	this.getItemsBySex(sex, this.itemService)
	    .then(response => { // Item[]
		this.itemCT = response;
		// データの更新
		this.makeDataForOverviewTable(response);
		this.makeDataForCorrelationTable(response);
		
		if(response[0]){ this.setDataForHistgram(response[0]);}
	    });
    }

    
    /***********************
     **  Modal            **
     ***********************/
    open(content) {
	console.log("Modal: open()");
    	this.modalService.open(content).result.then((result) => {
    	    this.closeResult = `Closed with: ${result}`;
    	}, (reason) => {
    	    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    	});
    }
    openHistgram(item: Item, content){
	console.log("Modal: openHistgram()");
	// ヒストグラム用にデータを格納
	this.setDataForHistgram(item)
	this.open(content);
    }
    private getDismissReason(reason: any): string {
	console.log("Modal: getDismissReason()");
    	if (reason === ModalDismissReasons.ESC) {
    	    return 'by pressing ESC';
    	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    	    return 'by clicking on a backdrop';
    	} else {
    	    return  `with: ${reason}`;
    	}
    }    

    
    ngOnInit(): void{
	this.flgReady = false;

	let cookieUserId = this.cookieService.get("taf-ct-app-user-id");
	console.log("CookieUserId: "+cookieUserId);
	if(cookieUserId){ // ログイン情報あり
	    this.userService.getUser(cookieUserId)
		.then(user => {
		    console.log("[Init]OverviewPage: "+user.sex);
		    this.user = user;
		    this.sex = user.sex;
		    this.changeSex(user.sex);
		});
	    
	    // 参加人数関係のグラフ
	    this.makeDataForPieChart();
	    this.makeDataForMultiBarChart();
	}else{ // ログイン情報なし
	    // ログイン画面にリダイレクト
	    this.router.navigate(['/login']);	
	}
	
		
    }

}
