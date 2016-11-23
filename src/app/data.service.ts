import { Injectable } from '@angular/core';

import { DATA }       from './mock-data'
import { RegressionLineParam, RecordRange, Rival } from './data'

@Injectable()
export class DataService {

    constructor() { }

    /*****************************
     **  Sort用関数
     *****************************/
    //
    // ItemId
    compareItemId(a: any, b: any): number{
	if(a.itemId > b.itemId) return -1;
	else if(a.itemId < b.itemId) return 1;
	return 0;
    }
    //
    // sp
    compareSp(a: any, b: any): number{
	if(a.sp > b.sp) return -1;
	else if(a.sp < b.sp) return 1;

	return 0;
    }
	
    /******************************
     **  Regression Line Params
     **  回帰直線のパラメータ
     ******************************/
    //
    // 全取得
    getRegressionLineParams(): RegressionLineParam[]{
	return DATA.RegressionLineParam;
    }
    //
    // sp指定
    getRegressionLineParamsBySp(sp: number): RegressionLineParam[]{
	let params: RegressionLineParam[] = [];
	let paramsAll: RegressionLineParam[] = this.getRegressionLineParams();
	// 全てのParamオブジェクトを探索
	for(let param of paramsAll){
	    if(param.sp === sp){
		params.push(param);
	    }
	}
	// itemId順にソート
	return params.sort(this.compareItemId);	   
    }
    // 
    // sp&id指定
    getRegressionLineParamByIds(sp: number, itemId: number): RegressionLineParam{
	let params: RegressionLineParam[] = this.getRegressionLineParams();
	let result: RegressionLineParam;
	for(let param of params){
	    if( param.sp == sp && param.itemId == itemId){
		return param;
	    }
	}
	return null;
    }
    
    /******************************
     **  Record Ranges           
     **  各種目の記録の参考最大最小値
     ******************************/
    //
    // 全取得
    getRecordRanges(): RecordRange[]{
	return DATA.RecordRange;
    }
    //
    // id指定
    getRecordRangeById(id: number): RecordRange{
	return this.getRecordRanges().find(renge => renge.sp === id);
    }

    /******************************
     **  Rivals
     **  目標とすべき選手のIDリスト
     ******************************/
    //
    // 全取得
    getRivals(): Rival[]{
	return DATA.Rivals;
    }
    //
    // userID指定
    getRivalsByUserId(id: string): Rival[]{
	let result: Rival[] = [];
	let rivalsAll: Rival[] = this.getRivals();
	
	for(let rival of rivalsAll){
	    if(rival.userId === id){
		result.push(rival);
	    }
	}
	return result.sort(this.compareSp);
    }
    //
    // userId & Sp指定
    getRivalsByUserIdAndSp(userId: string, sp: number): Rival{
	let rivals = this.getRivalsByUserId(userId);
    	return rivals.find(rival => rival.sp === sp);
    }


    
}
