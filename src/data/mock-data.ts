import { RegressionLineParam, RecordRange, Rival, CtMeta, Correlation, Histgram }   from '../app/data'


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
    { itemId: 51, avg: 50, max: 10, variance: 90, N: 38, NSP: [{sp: 101, N: 15}, {sp: 102, N: 9}, {sp: 103, N: 12}, {sp: 104, N: 5}], },
    { itemId: 54, avg: 80, max: 40, variance: 90, N: 38, NSP: [{sp: 101, N: 15}, {sp: 102, N: 9}, {sp: 103, N: 12}, {sp: 104, N: 5}], },
    { itemId: 55, avg: 90, max: 50, variance: 90, N: 38, NSP: [{sp: 101, N: 15}, {sp: 102, N: 9}, {sp: 103, N: 12}, {sp: 104, N: 5}], },
    { itemId: 56, avg: 10, max: 60, variance: 90, N: 38, NSP: [{sp: 101, N: 15}, {sp: 102, N: 9}, {sp: 103, N: 12}, {sp: 104, N: 5}], },
];

//
// 相関係数
// ==>
// export class Correlation{
//     itemId: number; // CT種目id
//     values: any;    // 相関係数の配列 [ 走幅跳, 三段跳, 走高跳, 棒高跳 ]の順
// }
export const CORRELATIONS: Correlation[] = [
    { itemId: 1, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 2, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 3, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 4, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 5, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 6, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 7, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 8, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 9, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 10, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 11, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 51, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 52, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 53, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 54, values: [ 0.44, 0.54, 0.33, 0.23] },
    { itemId: 61, values: [ 0.44, 0.54, 0.33, 0.23] },    
];

//
// ヒストグラム用データセット
//
// export class Histgram{
//     itemId: number; // 種目Id
//     values: any;    // 配列 [ {x:number,y:number}, ....]
// }
export const HISTGRAM: Histgram[] = [
    {
	itemId: 1,
	values: [ {x:0,y:0},{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:4},{x:5,y:5},{x:6,y:6},{x:7,y:7},{x:8,y:8},{x:9,y:9},{x:10,y:10},{x:11,y:11},{x:12,y:12},{x:13,y:13},{x:14,y:14},{x:15,y:15},{x:16,y:16},{x:17,y:17},{x:18,y:18},{x:19,y:19},{x:20,y:20},{x:21,y:21},{x:22,y:22},{x:23,y:23},{x:24,y:24},{x:25,y:25},{x:26,y:26},{x:27,y:27},{x:28,y:28},{x:29,y:29},{x:30,y:30},{x:31,y:31},{x:32,y:32},{x:33,y:33},{x:34,y:34},{x:35,y:35},{x:36,y:36},{x:37,y:37},{x:38,y:38},{x:39,y:39},{x:40,y:40},{x:41,y:41},{x:42,y:42},{x:43,y:43},{x:44,y:44},{x:45,y:45},{x:46,y:46},{x:47,y:47},{x:48,y:48},{x:49,y:49},{x:50,y:50},{x:51,y:51},{x:52,y:52},{x:53,y:53},{x:54,y:54},{x:55,y:55},{x:56,y:56},{x:57,y:57},{x:58,y:58},{x:59,y:59},{x:60,y:60},{x:61,y:61},{x:62,y:62},{x:63,y:63},{x:64,y:64},{x:65,y:65},{x:66,y:66},{x:67,y:67},{x:68,y:68},{x:69,y:69},{x:70,y:70},{x:71,y:71},{x:72,y:72},{x:73,y:73},{x:74,y:74},{x:75,y:75},{x:76,y:76},{x:77,y:77},{x:78,y:78},{x:79,y:79},{x:80,y:80},{x:81,y:81},{x:82,y:82},{x:83,y:83},{x:84,y:84},{x:85,y:85},{x:86,y:86},{x:87,y:87},{x:88,y:88},{x:89,y:89},{x:90,y:90},{x:91,y:91},{x:92,y:92},{x:93,y:93},{x:94,y:94},{x:95,y:95},{x:96,y:96},{x:97,y:97},{x:98,y:98},{x:99,y:99},],
    },
    {
	itemId: 2,
	values: [ {x:0,y:0},{x:1,y:2},{x:3,y:3},{x:4,y:0},{x:5,y:2},{x:6,y:3},],
    },
    {
	itemId: 3,
	values: [ {x:0,y:0},{x:1,y:2},{x:3,y:3},{x:4,y:0},{x:5,y:2},{x:6,y:3},],
    },
    {
	itemId: 4,
	values: [ {x:0,y:0},{x:1,y:2},{x:3,y:3},{x:4,y:0},{x:5,y:2},{x:6,y:3},],
    },
    {
	itemId: 5,
	values: [ {x:0,y:0},{x:1,y:2},{x:3,y:3},{x:4,y:0},{x:5,y:2},{x:6,y:3},],
    },
    {
	itemId: 6,
	values: [ {x:0,y:0},{x:1,y:2},{x:3,y:3},{x:4,y:0},{x:5,y:2},{x:6,y:3},],
    },
];
