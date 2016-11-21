import { Injectable } from '@angular/core';

import { DATA }       from './mock-data'
import { RegressionLineParam, RecordRange } from './data'

@Injectable()
export class DataService {

    constructor() { }

    //
    // 回帰曲線のパラメータを全て取得
    getRegressionLineParams(): RegressionLineParam[]{
	return DATA.RegressionLineParam;
    }
    // id指定
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
