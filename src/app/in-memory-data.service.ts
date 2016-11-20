import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryUserService implements InMemoryDbService {
  createDb() {
      let data = [
	  { id: 'OSK14001', name: 'Imagawa',   team: "OSK" },
	  { id: 'OSK14326', name: 'Yoshimura', team: "OSK" },
	  { id: 'OSK15003', name: 'Yoshikuni', team: "OSK" },
	  { id: 'OSK15005', name: 'Sakaguchi', team: "OSK" },
	  { id: 'OSK16005', name: 'Watase',    team: "OSK" },
	  { id: 'OSK16006', name: 'Kawane',    team: "OSK" },
      ];
    return {data};
  }
}


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      let users = [
	  // marks: [ 1:スナッチ, 2:クリーン,3:フルスクワット,4:両手砲丸投げ(前),5:両手砲丸投げ(後),6:立幅跳,7:立五段,8:立五段ホッピング(右),9:立五段ホッピング(左),10:60mCS-dash,11:150mCS,12:30RS, 
	  { id: 'OSK14001', name: 'Imagawa',   ctMarks: [  40,  62.5,   70,  10.48, 11.36,  2.31,  11.8,  11.5, 11.11,  3.45,  8.58, 20.61] },
	  { id: 'OSK14326', name: 'Yoshimura', ctMarks: [  60,    95,  110,  13.68,  11.1,    -1,    -1,    -1,    -1,   2.9,   7.5, 17.38] },
	  { id: 'OSK15003', name: 'Yoshikuni', ctMarks: [  50,    85,   80,  12.85, 14.52,  2.80, 14.90, 14.11, 13.10,  3.01,  7.47, 17.47] },
	  { id: 'OSK15005', name: 'Sakaguchi', ctMarks: [27.5,  47.5,   55,   9.47,  8.78,  2.25, 10.35,  9.93,  10.1,  3.67,  8.90, 20.86] },
	  { id: 'OSK16005', name: 'Watase',    ctMarks: [  50,    70,   80,   14.4, 15.03,  2.91, 14.51, 14.54, 13.93,  2.97,   7.5, 17.77] },
	  { id: 'OSK16006', name: 'Kawane',    ctMarks: [  50,    65,  100,  13.41, 13.00,  2.72, 14.56, 14.25, 14.32,  2.94,  7.38, 17.88] },
      ];
    return {users};
  }
}

