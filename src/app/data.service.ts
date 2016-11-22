import { Injectable } from '@angular/core';

import { DATA }       from './mock-data'
import { RegressionLineParam, RecordRange } from './data'

@Injectable()
export class DataService {

    constructor() { }

    //
    // Sort用関数
    compareItemId(a: any, b: any){
	if(a.itemId > b.itemId) return -1;
	if(a.itemId < b.itemId) return 1;
	return 0;
    }

    //
    // 回帰曲線のパラメータを全て取得
    getRegressionLineParams(): RegressionLineParam[]{
	return DATA.RegressionLineParam;
    }
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
    

    // 
    // 記録の表示範囲(主に専門種目)を全取得
    getRecordRanges(): RecordRange[]{
	return DATA.RecordRange;
    }
    // id指定で取得
    getRecordRangeById(id: number): RecordRange{
	return this.getRecordRanges().find(renge => renge.sp === id);
    }

}
