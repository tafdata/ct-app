import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';

import { User }       from './user';


@Injectable()
export class UserService {
    private usersUrl = 'app/users'; // URL to web api
    
    constructor(
	private http: Http,
    ) { }

    // 全ユーザーを取得
    getUsers(): Promise<User[]>{
	return this.http.get(this.usersUrl)
	    .toPromise()
	    .then(response => response.json().data as User[])
	    .catch(this.handleError);
    }

    
    
    // 単一のユーザを取得
    getUser(id: string): Promise<User>{
	return this.getUsers()
	    .then(users => users.find(user => user.id === id));
    }

    
    // エラーハンドリング
    private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
    }

    
}
