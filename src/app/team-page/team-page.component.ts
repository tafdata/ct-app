import { Component, OnInit }      from '@angular/core';
import { Location }               from '@angular/common';

import { User }                   from '../user';
import { UserService }            from '../user.service';
import { Team }                   from '../team';
import { TeamService }            from '../team.service';


@Component({
    selector: 'app-team-page',
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

    teams: Team[];
    model: number;
    selectedTeam: Team;
    userIdList: string[] = [];
    
    constructor(
	private location: Location,
	private teamService: TeamService,
	private userService: UserService,
    ) { }

    //
    // チーム選択
    changeTeam(id: string): void{
	this.selectedTeam = this.teamService.getTeamById(id);
	this.makeTeamMembersIdList(this.selectedTeam.id)
	    .then(response => {
		this.userIdList = response;
	    });
    }

    //
    // チームメンバー全員のIDを取得
    makeTeamMembersIdList(teamId: string): Promise<string[]>{
	return this.userService.getUsersByTeamId(teamId)
	    .then(response => {
		let list: string[] = [];
		for(let user of response){
		    list.push(user.id);
		}
		return list;
	    });
    }
    
    //
    // 戻るボタン
    goBack(): void{
	this.location.back();
    }
    
    ngOnInit() {
	this.teams = this.teamService.getTeams();
	this.selectedTeam = this.teams[0];
	this.makeTeamMembersIdList(this.selectedTeam.id)
	    .then(response => {
		this.userIdList = response;
	    });
    }

}
