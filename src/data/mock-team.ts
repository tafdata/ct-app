import { Team } from '../app/team';

//
// Team用クラス
// export class Team {
//     id: string;    // チームId
//     name: string;  // チーム名
//     participant: any; // 各専門種目ごとの参加者延べ人数
//                       // [ { sp: number, N: number} ... ]
// }


export const TEAM: Team[] = [
    {
	"id": "KYT",
	"name": "KYT",
	"participant": [{"N": 3, "sp": 102}, {"N": 0, "sp": 101}, {"N": 0, "sp": 104}, {"N": 0, "sp": 999}, {"N": 0, "sp": 103}, {"N": 0, "sp": 999}]
    },

    {"id": "THK", "name": "THK", "participant": [{"N": 2, "sp": 102}, {"N": 1, "sp": 101}, {"N": 1, "sp": 104}, {"N": 0, "sp": 999}, {"N": 1, "sp": 103}, {"N": 0, "sp": 999}]},
    {"id": "TKY", "name": "TKY", "participant": [{"N": 0, "sp": 102}, {"N": 1, "sp": 101}, {"N": 1, "sp": 104}, {"N": 0, "sp": 999}, {"N": 1, "sp": 103}, {"N": 0, "sp": 999}]},
    {"id": "NGY", "name": "NGY", "participant": [{"N": 0, "sp": 102}, {"N": 4, "sp": 101}, {"N": 0, "sp": 104}, {"N": 0, "sp": 999}, {"N": 6, "sp": 103}, {"N": 0, "sp": 999}]},
    {"id": "KOB", "name": "KOB", "participant": [{"N": 0, "sp": 102}, {"N": 1, "sp": 101}, {"N": 0, "sp": 104}, {"N": 0, "sp": 999}, {"N": 0, "sp": 103}, {"N": 0, "sp": 999}]},
    {"id": "OSK", "name": "OSK", "participant": [{"N": 0, "sp": 102}, {"N": 4, "sp": 101}, {"N": 2, "sp": 104}, {"N": 0, "sp": 999}, {"N": 10, "sp": 103}, {"N": 0, "sp": 999}]}

];
