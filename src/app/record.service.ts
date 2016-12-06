import { Injectable } from '@angular/core';

import { Mark }       from './mark';
import { Record }     from './record';
import { RECORDS }    from '../data/mock-records'

@Injectable()
export class RecordService {

  constructor() { }
    
    // 全取得
    getRecords(): Record[]{
	return RECORDS;
    }

    // id指定
    getRecord(id: string): Record{
	return  this.getRecords().find(record => record.id === id);
    }

    // idリスト
    getRecordsByUserIdList(userIdList: string[]): Record[]{
	let records: Record[] = [];
	for(let id of userIdList){
	    records.push(this.getRecord(id));
	}
	return records;
    }

    /***************
     **  種目指定
     ***************/
    //
    // sort用 比較関数
    compareMark(a:any, b:any): number{
	if(a.mark < b.mark) return -1;
	else if(a.mark > b.mark) return 1;

	return 0;
    }
    //
    // 種目指定でオブジェクトを返す
    getRecordAndUserIdByItemId(id: number): any{
	let result: any = [];
	let recordAll = this.getRecords();

	for(let record of recordAll){
	    for(let mark of record.records){
		if(mark.id === id){
		    result.push({
			userId: record.id,
			itemId: mark.id,
			mark: mark.mark,
		    });
		    break;
		}
	    }
	}

	return result.sort(this.compareMark);
    }
    
}
