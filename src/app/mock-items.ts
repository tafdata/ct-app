import { Item } from './item'

export const ITEMS: Item[]= [
    { id:  0, name: "総合スコア",       unit: "点",   tag: ["ct-meta"] },
    { id:  1, name: "スナッチ",         unit: "kg", tag: ["L","ct"] }, 
    { id:  2, name: "クリーン",         unit: "kg", tag: ["L","ct"] }, 
    { id:  3, name: "スクワット",       unit: "kg", tag: ["L","ct"] },
    { id:  4, name: "両手砲丸投げ(前)",  unit: "m",  tag: ["J","ct"] },
    { id:  5, name: "両手砲丸投げ(後)",  unit: "m",  tag: ["J","ct"] },
    // 専門種目
    { id:  101, name: "走幅跳",  unit: "m",  tag: ["J","sp",] },
    { id:  102, name: "三段跳",  unit: "m",  tag: ["J","sp",] },
    { id:  103, name: "走高跳",  unit: "m",  tag: ["J","sp",] },
    { id:  104, name: "棒高跳",  unit: "m",  tag: ["J","sp",] },
];
