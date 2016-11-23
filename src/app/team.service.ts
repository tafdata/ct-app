import { Injectable } from '@angular/core';

import { Team }       from './team';
import { TEAM }       from './mock-team';

@Injectable()
export class TeamService {

    constructor() { }

    //
    // 全取得
    getTeams(): Team[]{
	return TEAM;
    }
    //
    // id指定
    getTeamById(id: string): Team{
	return this.getTeams().find(team => team.id === id);
    }
    
    
}
