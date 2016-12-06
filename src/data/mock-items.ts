import { Item } from '../app/item'

// 種目クラス
// export class Item {
//     id: number;      // 種目Id
//     name: string;    // 種目名   
//     unit: string;    // 記録の単位[m, sec, min, kg ...]
//     tag:  string[];  // タグ
// }

export const ITEMS: Item[]= [
    // CT男女共通
    {tag:["ct-meta"],unit:"点",id:0,name:"総合スコア"},
    // CT種目男子	
    {tag:["L","ct","M"],unit:"kg",id:2,name:"クリーン"},
    {tag:["S","ct","M"],unit:"sec",id:11,name:"150mCS"},
    {tag:["J","ct","M"],unit:"m",id:4,name:"両手砲丸投げ（前）"},
    {tag:["J","ct","M"],unit:"m",id:9,name:"立五段ホッピング（左）"},
    {tag:["J","ct","M"],unit:"m",id:8,name:"立五段ホッピング（右）"},
    {tag:["J","ct","M"],unit:"m",id:6,name:"立幅跳"},
    {tag:["S","ct","M"],unit:"sec",id:10,name:"60mCS"},
    {tag:["J","ct","M"],unit:"m",id:7,name:"立五段"},
    {tag:["L","ct","M"],unit:"kg",id:1,name:"スナッチ"},
    {tag:["L","ct","M"],unit:"kg",id:3,name:"フルスクワット"},
    {tag:["J","ct","M"],unit:"m",id:5,name:"両手砲丸投げ（後）"},
    {tag:["S","ct","M"],unit:"sec",id:12,name:"20+30mRS"},
    // CT種目女子
    {tag:["L","ct","W"],unit:"kg",id:52,name:"クリーン"},
    {tag:["S","ct","W"],unit:"sec",id:61,name:"150mCS"},
    {tag:["J","ct","W"],unit:"m",id:54,name:"両手砲丸投げ（前）"},
    {tag:["J","ct","W"],unit:"m",id:59,name:"立五段ホッピング（左）"},
    {tag:["J","ct","W"],unit:"m",id:58,name:"立五段ホッピング（右）"},
    {tag:["J","ct","W"],unit:"m",id:56,name:"立幅跳"},
    {tag:["S","ct","W"],unit:"sec",id:60,name:"60mCS"},
    {tag:["J","ct","W"],unit:"m",id:57,name:"立五段"},
    {tag:["L","ct","W"],unit:"kg",id:51,name:"スナッチ"},
    {tag:["L","ct","W"],unit:"kg",id:53,name:"フルスクワット"},
    {tag:["J","ct","W"],unit:"m",id:55,name:"両手砲丸投げ（後）"},
    {tag:["S","ct","W"],unit:"sec",id:62,name:"20+30mRS"},
    // 専門種目
    {tag:["J","sp","M"],unit:"m",id:102,name:"三段跳"},
    {tag:["J","sp","M"],unit:"m",id:104,name:"棒高跳"},
    {tag:["J","sp","M"],unit:"m",id:103,name:"走高跳"},
    {tag:["J","sp","M"],unit:"m",id:101,name:"走幅跳"},
    {tag:["J","sp","W"],unit:"m",id:102,name:"三段跳"},
    {tag:["J","sp","W"],unit:"m",id:104,name:"棒高跳"},
    {tag:["J","sp","W"],unit:"m",id:103,name:"走高跳"},
    {tag:["J","sp","W"],unit:"m",id:101,name:"走幅跳"},
];
