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
    // 共通変数
    user: User;

    // ローカル変数
    teams: Team[];
    model: number;
    selectedTeam: Team;
    userList: User[] = [];
    
    constructor(
	private location: Location,
	private teamService: TeamService,
	private userService: UserService,
    ) {
	this.teams = teamService.getTeams();
    }

    //
    // チーム選択
    changeTeam(id: string): void{
	this.selectedTeam = this.teamService.getTeamById(id);
	this.makeTeamMemberList(this.selectedTeam.id);
    }

    //
    // チームメンバー全員のIDを取得
    makeTeamMemberList(teamId: string): Promise<string[]>{
	return this.userService.getUsersByTeamId(teamId)
	    .then(response => {
		this.userList = response;
	    });
    }
    
    //
    // 戻るボタン
    goBack(): void{
	this.location.back();
    }
    
    ngOnInit() {
	this.selectedTeam = this.teams[0];
	this.makeTeamMemberList(this.teams[0].id);
    }

}
