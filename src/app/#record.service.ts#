import { Injectable } from '@angular/core';

import { Mark }       from './mark';
import { Record }     from './record';
import { RECORDS }    from './mock-records'

@Injectable()
export class RecordService {

  constructor() { }
    
    // 全ユーザーの記録を取得
    getRecords(): Record[]{
	return RECORDS;
    }

    // idを指定して記録を取得
    getRecord(id: string): Record{
	return  this.getRecords().find(record => record.id === id);
    }

    // idの配列から複数のユーザーの記録を取得
    getRecordsByUserIdList(userIdList: string[]): Record[]{
	let records: Record[] = [];
	for(let id of userIdList){
	    records.push(this.getRecord(id));
	}
	return records;
    }
    
}
