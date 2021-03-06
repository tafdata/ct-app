import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';

import { User }       from './user';


@Injectable()
export class UserService {
    // ログイン情報
    private user: User;

    // ローカル変数
    private usersUrl = 'app/users'; // URL to web api

    
    constructor(
	private http: Http,
    ) { }

    /**********************
     ** sort用比較関数     **
     **********************/
    compareId(a: User, b: User): number{
	if(a.id < b.id) return -1;
	else if(a.id > b.id) return 1;

	return 0;	
    }

    
    /**********************
     ** ユーザー情報       **
     **********************/
    //
    // 全取得
    getUsers(): Promise<User[]>{
	return this.http.get(this.usersUrl)
	    .toPromise()
	    .then(response => response.json().data as User[])
	    .catch(this.handleError);
    }
    //
    // idを指定
    getUser(id: string): Promise<User>{
    	return this.getUsers()
    	    .then(users => users.find(user => user.id === id));
    }
    //
    // id リストをしてい
    getUsersByIdList(list: string[]): Promise<User[]>{
	return this.getUsers()
	    .then(response => {
		let users: User[] = [];

		for(let user of response){
		    if(list.indexOf(user.id) >= 0){
			users.push(user);
		    }
		}
		return users;
	    });
    }
    //
    // teamId指定
    getUsersByTeamId(teamId: string): Promise<User[]>{
	return this.getUsers()
	    .then(response => {
		let users: User[] = []; 
		for(let user of response){
		    if(user.team === teamId){
			users.push(user);
		    }
		}
		return users;
	    });
    }
    //
    // teamIdと性別を指定
    getUsersByTeamIdAndSex(teamId: string, sex: string): Promise<User[]>{
	return this.getUsers()
	    .then(response => {
		let users: User[] = []; 
		for(let user of response){
		    if(user.team === teamId && user.sex == sex){
			users.push(user);
		    }
		}
		return users.sort(this.compareId);	
	    });
    }
	

    
    // エラーハンドリング
    private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
    }


}
