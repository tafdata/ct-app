import { Injectable } from '@angular/core';

import { User }       from './user';
import { USERS }      from './mock-users';

@Injectable()
export class UserService {

    constructor() { }

    
    getUsers(): Promise<User[]>{
	return Promise.resolve(USERS);
    }

    getUsersSlowly(): Promise<User[]> {
	return new Promise<User[]>(resolve =>
				   setTimeout(resolve, 2000)) // delay 2 seconds
	    .then(() => this.getUsers());
    }

    // 単一のユーザを取得
    getUser(id: string): Promise<User>{
	return this.getUsers()
	    .then(users => users.find(user => user.id === id));
    }

    
}
