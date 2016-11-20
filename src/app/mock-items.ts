import { Item } from './item'

export const ITEMS: Item[]= [
    { id:  1, name: "スナッチ",         unit: "kg", tag: ["L"] },
    { id:  2, name: "クリーン",         unit: "kg", tag: ["L"] },
    { id:  3, name: "スクワット",       unit: "kg", tag: ["L"] },
    { id:  4, name: "両手砲丸投げ(前)",  unit: "m",  tag: ["J"] },
    { id:  5, name: "両手砲丸投げ(後)",  unit: "m",  tag: ["J"] },
    // 専門種目
    { id:  101, name: "走幅跳",  unit: "m",  tag: ["J"] },
    { id:  102, name: "三段跳",  unit: "m",  tag: ["J"] },
    { id:  103, name: "走高跳",  unit: "m",  tag: ["J"] },
    { id:  104, name: "棒高跳",  unit: "m",  tag: ["J"] },
];
