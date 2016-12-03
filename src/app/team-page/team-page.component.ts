import { Component, OnInit }      from '@angular/core';
import { Location }               from '@angular/common';
import { Router }            from '@angular/router';
import { CookieService }     from 'angular2-cookie/core';

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
    sex: string;  // 性別(M/W)
    teams: Team[];
    model: number;
    selectedTeam: Team;
    userListMen: any; // any = {sex: string, list: User[]}
    userListWomen: any; // any = {sex: string, list: User[]}
    
    
    constructor(
	private cookieService: CookieService,
	private location: Location,
	private router:      Router,
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
	console.log(this.userListMen);
	console.log(this.userListWomen);
    }

    //
    // チームメンバーのリストUser[]を作成
    makeTeamMemberList(teamId: string): void{
	// リスト
	this.userListMen = null;
	this.userListWomen = null;

	// 男子
	this.userService.getUsersByTeamIdAndSex(teamId, "M")
	    .then(response => {
		if(response.length > 0){
		    this.userListMen = {
			sex: "M",
			list: response,
		    };
		}
	    });
	// 女子
	this.userService.getUsersByTeamIdAndSex(teamId, "W")
	    .then(response => {
		if(response.length > 0){
		    this.userListWomen = {
			sex: "W",
			list: response,
		    };
		}
	    });
    }
    
    //
    // 戻るボタン
    goBack(): void{
	this.location.back();
    }
    
    ngOnInit() {
	// ダミーでチームを指定
	this.selectedTeam = this.teams[0];
	console.log(this.selectedTeam);
	
	let cookieUserId = this.cookieService.get("taf-ct-app-user-id");
	console.log("CookieUserId: "+cookieUserId);
	if(cookieUserId){ // ログイン情報あり
	    this.userService.getUser(cookieUserId)
		.then(user => {
		    console.log(user);
		    this.user = user;
		    this.sex = user.sex;
		    this.selectedTeam = this.teams.find(team => team.id === user.team);
		    console.log(this.selectedTeam);
		    this.makeTeamMemberList(user.team);		 
		});
	    
	}else{ // ログイン情報なし
	    // ログイン画面にリダイレクト
	    this.router.navigate(['/login']);	
	}

    }

}
