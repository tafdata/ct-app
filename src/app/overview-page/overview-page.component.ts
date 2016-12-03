import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { Router }            from '@angular/router';
import { CookieService }     from 'angular2-cookie/core';

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
    dataOverviewTable: any = { thead: [], tbody: {}}; // Overview    
    dataCorrelation: any = { thead: [], tbody: {}};    // 相関係数
    dataHistgram: any;
    dataPieChart: any = [];
    
    constructor(
	private cookieService: CookieService,
	private location:    Location,
	private router:      Router,
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
    getParticipant(team: Team, itemId: number): number{
	let N: number;
	if(N = team.participant.find(n => n.sp === itemId).N){
	    return N;
	}else{
	    return 0;
	}
    }

    //
    // 参加人数表用のデータセット作成
    makeDataForPieChart(): void{
	let data: any = [];
	for(let item of this.itemSP){
	    let N: number = 0;
	    for(let team of this.teams){
		N += this.getParticipant(team, item.id);
	    }
	    data.push({
		key: item.name,
		y:   N,
	    });
	}
	this.dataPieChart =  data;
    }    


    //
    // Overview用データセット
    makeDataForOverviewTable(itemCT: Item[]): void{
	// ヘッダ
	let thead: any = [
	    {head:"平均"},{head:"最高"},{head:"分散"},{head:"参加人数"}
	];

	//
	let tbody: any = [];
	for(let item of itemCT){
	    let meta = this.getCtMeta(item.id);
	    //console.log(meta);
	    if(meta){
		tbody.push({
		    item: item,
		    values: [ meta.avg, meta.max, meta.variance, meta.N]
		});
	    }
	}


	this.dataOverviewTable = {
	    thead: thead,
	    tbody: tbody,
	};
	console.log(this.dataOverviewTable);
    }

    //
    // ヒストグラム用
    setDataForHistgram(item: Item): any{
	let values = this.histgram.find(data => data.itemId === item.id);

	this.dataHistgram = [{
	    key: item.name,
	    values: values.values,
	}];		
    }

    //
    // 相関係数用データセット
    makeDataForCorrelationTable(itemCT: Item[]): void{
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
	this.location.back();	
    }

    //
    // 性別を切り替え
    changeSex(sex: string): void{
	console.log("changeSex(): "+sex);
	this.getItemsBySex(sex, this.itemService)
	    .then(response => {
		this.itemCT = response;
		// データの更新
		this.makeDataForOverviewTable(response);
		this.makeDataForCorrelationTable(response);
	    });
    }

    
    ngOnInit(): void{
	this.flgReady = false;
	console.log(this.itemCT);
	console.log(this.itemSP);
	console.log(this.metaData);
	console.log(this.dataOverviewTable);
	console.log(this.dataCorrelation);

	let cookieUserId = this.cookieService.get("taf-ct-app-user-id");
	console.log("CookieUserId: "+cookieUserId);
	if(cookieUserId){ // ログイン情報あり
	    this.userService.getUser(cookieUserId)
		.then(user => {
		    console.log(user);
		    this.user = user;
		    this.sex = user.sex;
		    return this.getItemsBySex(this.sex, this.itemService);
		})
		.then(response => {
		    console.log(response);
		    this.itemCT = response;
		    this.makeDataForOverviewTable(response);
		    this.makeDataForCorrelationTable(response);
		    this.setDataForHistgram(response[0]);
		    this.makeDataForPieChart();
		    this.flgReady = true;
		});
	}else{ // ログイン情報なし
	    // ログイン画面にリダイレクト
	    this.router.navigate(['/login']);	
	}
	
		
    }

}
