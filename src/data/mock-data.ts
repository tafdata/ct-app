import { RegressionLineParam, RecordRange, Rival, CtMeta, Correlation }   from '../app/data'


//
// 回帰直線のパラメータ クラス
// ==> CTの目標記録を計算するための線形回帰直線関係のパラメータ
// export class RegressionLineParam {
//     sp: number;       // 専門種目Id
//     itemId: number;   // 種目Id
//     a: number;        // y = a*x + b
//     b: number;        // x: 独立変数(専門種目の記録), y: 目的変数(CT種目の目標記録)  
// }
export const REGRESSION_LINE_PARAM: RegressionLineParam[] = [
    { sp: 101, itemId: 1, a: 2.34, b: 0.3 },
    { sp: 101, itemId: 2, a: 3.45, b: 0.1 },
    { sp: 101, itemId: 3, a: 5.43, b: 0.2 },
    { sp: 102, itemId: 1, a: 2.34, b: 0.3 },
    { sp: 102, itemId: 2, a: 3.45, b: 0.1 },
    { sp: 102, itemId: 3, a: 5.43, b: 0.2 },
];


//
// 専門記録の表示範囲
// ==> 専門種目の目標記録を計算する際の上限下限を指定
// export class RecordRange {
//     sp: number;    // 専門種目Id
//     min: number;   // 目標記録を算出する下限値
//     max: number;   // 目標記録を算出する下限値
//     step: number;  // 刻み幅
// }
export const RECORD_RANGE: RecordRange[] = [
    { sp: 101, min:  6.00, max:  8.00, step: 0.10 },
    { sp: 102, min: 11.00, max: 16.00, step: 0.20 },
    { sp: 103, min:  1.70, max:  2.20, step: 0.05 },
    { sp: 104, min:  3.00, max:  5.50, step: 0.10 },    
];


//
// ライバル選手のIDリスト
// ==> ここで指定したIdの選手がmy-pageの'ライバルの記録一覧'に表示される
// export class Rival{
//     userId: string;      // ユーザーId
//     sp: number;          // 専門種目Id
//     rivalsId: string[];  // ユーザーIdのリスト
// }
export const RIVALS: Rival[] = [
    { userId: "OSK14001", sp: 101, rivalsId: ["OSK15005","OSK15003","OSK16006",] },
    { userId: "OSK14326", sp: 101, rivalsId: ["OSK15005","OSK16006",] },
    { userId: "OSK14326", sp: 102, rivalsId: ["OSK15005","OSK15003","OSK16006",] },
    { userId: "OSK15003", sp: 101, rivalsId: ["OSK15005","OSK15003","OSK16006",] },
    { userId: "OSK15003", sp: 102, rivalsId: ["OSK14326","OSK16006",] },
    { userId: "OSK15005", sp: 103, rivalsId: ["OSK14001","OSK15003",] },
    { userId: "OSK16005", sp: 101, rivalsId: ["OSK15005","OSK15003","OSK16006",] },
    { userId: "OSK16005", sp: 102, rivalsId: ["OSK15005","OSK15003","OSK16006",] },
    { userId: "OSK16006", sp: 101, rivalsId: ["OSK15005","OSK15003","OSK16006",] },
    { userId: "OSK16006", sp: 104, rivalsId: ["OSK15005","OSK15003","OSK16006",] },
];


//
// CTの統計メタ情報(統計量と参加者数)
// ==>  Overview Pageに使用
// export class CtMetad
//{
//     itemId: number;      // 種目Id
//     avg: number;         // 平均
//     max: number;         // 最高記録
//     variance: number:    // 分散
//     N: number; // 参加人数(総数)
//     NSP: any;  //各専門種目ごとの参加人数(専門種目Idと参加人数のkey-valueオブジェクトの配列)
//                // Ex. NSP: any = [ { sp:number, N: number}, ...] 
// }
export const CT_META: CtMeta[] = [
    { itemId: 1, avg: 50, max: 10, variance: 90, N: 38, NSP: [{sp: 101, N: 15}, {sp: 102, N: 9}, {sp: 103, N: 12}, {sp: 104, N: 5}], },
    { itemId: 2, avg: 60, max: 20, variance: 90, N: 38, NSP: [{sp: 101, N: 15}, {sp: 102, N: 9}, {sp: 103, N: 12}, {sp: 104, N: 5}], },
    { itemId: 3, avg: 70, max: 30, variance: 90, N: 38, NSP: [{sp: 101, N: 15}, {sp: 102, N: 9}, {sp: 103, N: 12}, {sp: 104, N: 5}], },
    { itemId: 4, avg: 80, max: 40, variance: 90, N: 38, NSP: [{sp: 101, N: 15}, {sp: 102, N: 9}, {sp: 103, N: 12}, {sp: 104, N: 5}], },
    { itemId: 5, avg: 90, max: 50, variance: 90, N: 38, NSP: [{sp: 101, N: 15}, {sp: 102, N: 9}, {sp: 103, N: 12}, {sp: 104, N: 5}], },
    { itemId: 6, avg: 10, max: 60, variance: 90, N: 38, NSP: [{sp: 101, N: 15}, {sp: 102, N: 9}, {sp: 103, N: 12}, {sp: 104, N: 5}], },
];

//
// 相関係数
// ==>
// export class Correlation{
//     sex: string; // 性別
//     itemId: number; // CT種目id
//     values: any;    // 相関係数の配列 [ 走幅跳, 三段跳, 走高跳, 棒高跳 ]の順
// }
export const CORRELATIONS: Correlation[] = [
    { sex: "M", itemId: 1, values: [ 0.44, 0.54, 0.33, 0.23] },
    { sex: "M", itemId: 2, values: [ 0.44, 0.54, 0.33, 0.23] },
    { sex: "M", itemId: 3, values: [ 0.44, 0.54, 0.33, 0.23] },
    { sex: "M", itemId: 4, values: [ 0.44, 0.54, 0.33, 0.23] },
    { sex: "M", itemId: 5, values: [ 0.44, 0.54, 0.33, 0.23] },
    { sex: "M", itemId: 6, values: [ 0.44, 0.54, 0.33, 0.23] },
    { sex: "W", itemId: 7, values: [ 0.44, 0.54, 0.33, 0.23] },
    { sex: "W", itemId: 8, values: [ 0.44, 0.54, 0.33, 0.23] },
    { sex: "W", itemId: 9, values: [ 0.44, 0.54, 0.33, 0.23] },
    { sex: "W", itemId: 10, values: [ 0.44, 0.54, 0.33, 0.23] },
    { sex: "W", itemId: 11, values: [ 0.44, 0.54, 0.33, 0.23] },    
];

