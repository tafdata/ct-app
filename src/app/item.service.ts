import { Injectable }    from '@angular/core';

import { Item }  from './item'
import { ITEMS } from './mock-items'


@Injectable()
export class ItemService {
    
    constructor() { }

    //
    // Sorting用比較関数
    //
    compareId(a: Item, b: Item){
	if(a.id < b.id) return -1;
	else if(a.id > b.id) return 1;

	return 0;
    }
    
    // 全種目情報を取得
    getItems(): Item[]{
	return ITEMS;
    }

    // idで指定した種目を取得
    getItem(id: number): Item{
	return  this.getItems().find(item => item.id === id);
    }

    // idの配列で複数種目の情報を取得
    getItemsByIdList(list: number[]): Item[]{
	let items: Item[];
	for(let id of list){
	    items.push(this.getItem(id));
	}	
	return items;
    }

    // tagを指定して種目情報を取得
    getItemsByTag(tag: string): Item[]{
	let items: Item[] = [];
	let itemAll: Item[] = this.getItems();
	for(let item of itemAll){
	    if(item.tag.indexOf(tag) >= 0){
		items.push(item);
	    }
	}
	// Id順に並べ替えて戻る
	return items.sort(this.compareId);
    }
    
}
