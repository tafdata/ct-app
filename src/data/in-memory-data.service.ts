import { InMemoryDbService } from 'angular-in-memory-web-api';

// ユーザークラス
// export class User {
//     id: string;   // ユーザーID
//     name: string; // ユーザー名
//     team: string; // チームID
//     sex: string;  // 性別(M/W)
//     SP1: number;  // 専門種目ID(1つめ) idは 'mock-item.ts'で決めたもの。タグは"sp"
//     SP2: number;  // 専門種目ID(2つめ)
// }

export class InMemoryDataService implements InMemoryDbService { 
    createDb() { 
	let users = [
	    {"SP1": 103, "id": "OSK16015", "name": "Arla _", "sex": "W", "team": "OSK"},
	    {"SP1": 103, "id": "OSK11296", "name": "Vennie _", "sex": "W", "team": "OSK"},
	    {"SP1": 103, "SP2": 999, "id": "NGY14466", "name": "Angelena _", "sex": "W", "team": "NGY"},
	    {"SP1": 103, "SP2": 104, "id": "NGY15011", "name": "Alline _", "sex": "W", "team": "NGY"},
	    {"SP1": 103, "id": "OSK15013", "name": "Corina _", "sex": "W", "team": "OSK"},

	    {"SP1": 103, "id": "OSK14006", "name": "Altha _", "sex": "W", "team": "OSK"}, {"SP1": 103, "id": "TKY16011", "name": "Carline _", "sex": "W", "team": "TKY"}, {"SP1": 103, "SP2": 101, "id": "THK15018", "name": "Vera _", "sex": "W", "team": "THK"}, {"SP1": 101, "id": "KOB15003", "name": "Thora _", "sex": "W", "team": "KOB"}, {"SP1": 102, "id": "THK16013", "name": "Stacey", "sex": "M", "team": "THK"}, {"SP1": 102, "SP2": 101, "id": "THK16020", "name": "Dion", "sex": "M", "team": "THK"}, {"SP1": 102, "id": "KYT14116", "name": "Roosevelt", "sex": "M", "team": "KYT"}, {"SP1": 102, "id": "KYT14326", "name": "Normand", "sex": "M", "team": "KYT"}, {"SP1": 102, "id": "KYT15003", "name": "Spencer", "sex": "M", "team": "KYT"}, {"SP1": 103, "id": "OSK15006", "name": "Curt", "sex": "M", "team": "OSK"}, {"SP1": 103, "id": "OSK15010", "name": "Adam", "sex": "M", "team": "OSK"}, {"SP1": 103, "SP2": 104, "id": "NGY14012", "name": "Glenn", "sex": "M", "team": "NGY"}, {"SP1": 103, "SP2": 101, "id": "THK16018", "name": "Casey", "sex": "M", "team": "NGY"}, {"SP1": 103, "id": "KYT16196", "name": "Carl", "sex": "M", "team": "OSK"}, {"SP1": 103, "SP2": 104, "id": "KYT16116", "name": "Matt", "sex": "M", "team": "OSK"}, {"SP1": 103, "id": "OSK16166", "name": "Ferdinand", "sex": "M", "team": "OSK"}, {"SP1": 103, "id": "OSK16218", "name": "Clayton", "sex": "M", "team": "OSK"}, {"SP1": 103, "id": "NGY13003", "name": "Nestor", "sex": "M", "team": "NGY"}, {"SP1": 103, "id": "NGY16007", "name": "Hilario", "sex": "M", "team": "NGY"}, {"SP1": 101, "SP2": 102, "id": "OSK13356", "name": "Pablo", "sex": "M", "team": "OSK"}, {"SP1": 101, "id": "OSK16456", "name": "Jeffrey", "sex": "M", "team": "OSK"}, {"SP1": 101, "SP2": 101, "id": "NGY16206", "name": "Jermaine", "sex": "M", "team": "NGY"}, {"SP1": 101, "SP2": 102, "id": "NGY15496", "name": "Mary", "sex": "M", "team": "NGY"}, {"SP1": 101, "id": "OSK16001", "name": "Lowell", "sex": "M", "team": "OSK"}, {"SP1": 101, "id": "OSK12002", "name": "Mauro", "sex": "M", "team": "OSK"}, {"SP1": 101, "SP2": 102, "id": "TKY15004", "name": "Tory", "sex": "M", "team": "TKY"}, {"SP1": 101, "id": "THK16005", "name": "Clark", "sex": "M", "team": "THK"}, {"SP1": 101, "id": "NGY10008", "name": "Oren", "sex": "M", "team": "NGY"}, {"SP1": 101, "id": "NGY14011", "name": "Bobbie", "sex": "M", "team": "NGY"}, {"SP1": 104, "SP2": 101, "id": "OSK13156", "name": "Isaiah", "sex": "M", "team": "OSK"}, {"SP1": 104, "SP2": 999, "id": "OSK10476", "name": "Alfonzo", "sex": "M", "team": "OSK"}, {"SP1": 104, "id": "TKY14009", "name": "Tom", "sex": "M", "team": "TKY"}, {"SP1": 104, "id": "THK13001", "name": "Blair", "sex": "M", "team": "THK"}
	]; 
	return {users}; 
    } 
}
