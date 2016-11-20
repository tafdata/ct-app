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
	return this.getRecords().find(record => record.id === id);
    }
    
}