import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs';

import{ User }            from './user';



@Injectable()
export class UserSearchService {

    constructor(
	private http: Http,
    ) { }

    search(term: string): Observable<User[]>{
	return this.http
	    .get(`app/users/?name=${term}`)
	    .map((r: Response) => r.json().data as User[]);
    }
    
}
