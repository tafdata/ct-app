import { Record } from '../app/record'

// レコードクラス
// export class Record {
//     id: string;       // ユーザーId
//     records: Mark[];  // 記録(Mark)クラスの配列
// }

// // 記録クラス
// export class Mark{
//     id: number;       // 種目Id
//     name: string;     // 種目名
//     mark: number;     // 記録[ex. 6.00]
//     score: number;    // スコア
//     rank: number;     // 総合順位
//     rankSP1: number;  // 専門種目1内での順位
//     rankSP2: number;  // 専門種目2内での順位
// }


export const RECORDS: Record[] = [
    {
	id: 'OSK14001',
	records: [
	    {id: 0,name: "総合スコア",mark: 5020,score: 1020,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 51,name: "スナッチ",mark: 40,score: 670,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 52,name: "クリーン",mark: 72.5,score: 789,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 53,name: "スクワット",mark: 80,score: 970,rank: 2,rankSP1: 3,rankSP2: -1},
	    {id: 54,name: "立幅跳",mark: 2.31,score: 675,rank:5,rankSP1: 3,rankSP2: -1},
	    {id: 55,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 101,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 102,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	],
    },
    {
	id: 'OSK14326',
	records: [
	    {id: 0,name: "総合スコア",mark: 1020,score: 1020,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 1,name: "スナッチ",mark: 50,score: 670,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 2,name: "クリーン",mark: 62.5,score: 789,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 3,name: "スクワット",mark: 70,score: 970,rank: 2,rankSP1: 3,rankSP2: -1},
	    {id: 4,name: "立幅跳",mark: 2.31,score: 675,rank:5,rankSP1: 3,rankSP2: -1},
	    {id: 5,name: "立五段",mark: 11.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 101,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 102,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	],
    },
    {
	id: 'OSK15003',
	records: [
	    {id: 0,name: "総合スコア",mark: 3020,score: 1020,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 1,name: "スナッチ",mark: 50,score: 670,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 2,name: "クリーン",mark: 62.5,score: 789,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 3,name: "スクワット",mark: 70,score: 970,rank: 2,rankSP1: 3,rankSP2: -1},
	    {id: 4,name: "立幅跳",mark: 2.31,score: 675,rank:5,rankSP1: 3,rankSP2: -1},
	    {id: 5,name: "立五段",mark: 11.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 101,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 102,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	],
    },
    {
	id: 'OSK15005',
	records: [
	    {id: 0,name: "総合スコア",mark: 4020,score: 1020,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 51,name: "スナッチ",mark: 40,score: 670,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 52,name: "クリーン",mark: 62.5,score: 789,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 56,name: "スクワット",mark: 70,score: 970,rank: 2,rankSP1: 3,rankSP2: -1},
	    {id: 57,name: "立幅跳",mark: 2.31,score: 675,rank:5,rankSP1: 3,rankSP2: -1},
	    {id: 58,name: "立五段",mark: 11.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 101,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 102,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	],
    },
    {
	id: 'OSK16005',
	records: [
	    {id: 0,name: "総合スコア",mark: 2020,score: 1020,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 1,name: "スナッチ",mark: 40,score: 670,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 2,name: "クリーン",mark: 62.5,score: 789,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 3,name: "スクワット",mark: 70,score: 970,rank: 2,rankSP1: 3,rankSP2: -1},
	    {id: 4,name: "立幅跳",mark: 2.31,score: 675,rank:5,rankSP1: 3,rankSP2: -1},
	    {id: 5,name: "立五段",mark: 11.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 101,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 102,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	],
    },
    {
	id: 'OSK16006',
	records: [
	    {id: 0,name: "総合スコア",mark: 1450,score: 1020,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 1,name: "スナッチ",mark: 40,score: 670,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 2,name: "クリーン",mark: 62.5,score: 789,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 3,name: "スクワット",mark: 70,score: 970,rank: 2,rankSP1: 3,rankSP2: -1},
	    {id: 4,name: "立幅跳",mark: 2.31,score: 675,rank:5,rankSP1: 3,rankSP2: -1},
	    {id: 5,name: "立五段",mark: 11.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 101,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	    {id: 102,name: "立五段",mark: 12.8,score: 670,rank: 5,rankSP1: 3,rankSP2: -1},
	],
    },
];
