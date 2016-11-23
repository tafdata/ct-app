import { Component, OnInit }      from '@angular/core';
import { Location }               from '@angular/common';

import { Team }                   from '../team';
import { TeamService }            from '../team.service';


@Component({
    selector: 'app-team-page',
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {
    teams: Team[];
    
    constructor(
	private location: Location,
	private teamService: TeamService,
    ) { }

    //
    // 戻るボタン
    goBack(): void{
	this.location.back();
    }
    
    ngOnInit() {
	this.teams = this.teamService.getTeams();
    }

}
