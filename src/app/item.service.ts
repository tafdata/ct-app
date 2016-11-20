import { Injectable }    from '@angular/core';

import { Item }  from './item'
import { ITEMS } from './mock-items'


@Injectable()
export class ItemService {
    
    constructor() { }

    // 全種目情報を取得
    getItems(): Item[]{
	return ITEMS;
    }
}
