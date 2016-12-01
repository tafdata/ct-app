import { Component, OnInit, Output } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


import { UserSearchService } from '../user-search.service';
import { User }              from '../user';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.css'],
    providers: [UserSearchService],
})
export class UserSearchComponent implements OnInit {
    users: Observable<User[]>;
    @Output() loginUser: User;
    private searchTerms = new Subject<string>();

    
    constructor(
	private userSearchService: UserSearchService,
	private router: Router,
    ) { }

    
    // Push a search term into the observable stream.
    search(term: string): void{
	this.searchTerms.next(term);
    }

    
    ngOnInit(): void {
	this.users = this.searchTerms
	    .debounceTime(300) //  300ms待つ
	    .distinctUntilChanged() // search termが前と同じなら、無視
	    .switchMap(term => term // 新たなObservaleに更新
		       ? this.userSearchService.search(term)
		       : Observable.of<User[]>([]))
	    .catch(error => {
		// エラー処理
		console.log(error);
		return Observable.of<User[]>([]);
	    });
    }

    // マイページへ移動
    gotoMyPage(user: User): void{
	let link = ['/mypage', user.id];
	this.router.navigate(link);
    }
}
