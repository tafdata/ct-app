import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      let users = [
	  { id: 'OSK14001', name: 'Imagawa',   team: "OSK", sex: "W", SP: [101]  },
  	  { id: 'OSK14326', name: 'Yoshimura', team: "OSK", sex: "M", SP: [102, 101] },
	  { id: 'OSK15003', name: 'Yoshikuni', team: "OSK", sex: "M", SP: [101, 101] },
	  { id: 'OSK15005', name: 'Sakaguchi', team: "OSK", sex: "W", SP: [103] },
	  { id: 'OSK16005', name: 'Watase',    team: "OSK", sex: "M", SP: [101] },
	  { id: 'OSK16006', name: 'Kawane',    team: "OSK", sex: "M", SP: [101]},
      ];
      return {users};
  }
}

