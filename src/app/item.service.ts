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

    // idで指定した種目を取得
    getItem(id: number): Item{
	return this.getItems().find(item => item.id === id);
    }

    // idの配列で複数種目の情報を取得
    getItemsByIdList(list: number[]){
	let items: Item[];
	for(let id of list){
	    items.push(this.getItem(id));
	}	
	return items;
    }
}
