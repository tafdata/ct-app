import { Component, OnInit } from '@angular/core';

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
    	private userService: UserService,
	private itemService: ItemService,
	private dataService: DataService,
	private teamService: TeamService,
    ){
	this.itemCT = itemService.getItemsByTag("ct");
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
    makeDataForOverviewTable(): void{
	// ヘッダ
	let thead: any = [
	    {head:"平均"},{head:"最高"},{head:"分散"},{head:"参加人数"}
	];

	//
	let tbody: any = [];
	for(let item of this.itemCT){
	    let meta = this.getCtMeta(item.id);
	    tbody.push({
		item: item,
		values: [ meta.avg, meta.max, meta.variance, meta.N]
	    });
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
    makeDataForCorrelationTable(): void{
	let thead: any[] = [
	    {head:"走幅跳"},{head:"三段跳"},{head:"走高跳"},{head:"棒高跳"}
	];
	let tbody: any = [];

	for(let item of this.itemCT){
	    tbody.push({
		item: item,
		values: this.getCorrelationByItemId(item.id).values,
	    });		    
	}
	console.log(tbody);
	this.dataCorrelation = {
	    thead: thead,
	    tbody: tbody,
	}		
    }
    getCorrelationByItemId(id: number): Correlation{
	return   this.correlations.find(val => val.itemId === id);
    }


    
    ngOnInit(): void{
	console.log(this.itemCT);
	console.log(this.itemSP);
	console.log(this.metaData);

	this.makeDataForPieChart();
	console.log(this.dataPieChart);
	this.makeDataForOverviewTable();
	this.makeDataForCorrelationTable();

	this.setDataForHistgram(this.itemCT[0]);
    }

}
