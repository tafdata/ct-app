import { Component, Input, OnInit } from '@angular/core';
import { Router }                    from '@angular/router';
import { Observable }                from 'rxjs/Observable';
import { Subject }                   from 'rxjs/Subject';

import { User }                      from '../user';
import { UserService }               from '../user.service';
import { UserSearchService }         from '../user-search.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserSearchService],
})
export class LoginComponent implements OnInit {
    // ユーザー情報
    user: User;

    // ローカル変数
    users: Observable<User[]>;
    private searchTerms = new Subject<string>();

    
    constructor(
	private userService: UserService,
	private userSearchService: UserSearchService,
	private router: Router,
    ) { }
    

    // Push a search term into the observable stream.
    search(term: string): void{
	this.searchTerms.next(term);
    }


    ngOnInit() {
	this.autoComplete();
    }
    // オートコンプリート
    autoComplete(): void{
	console.log("autoComplete");
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
    gotoMyPage(): void{	
	this.router.navigate(['/mypage', this.user.id]);
    }

    
    // ユーザー選択
    setUser(user: User): void{
	this.user = user;
	console.log(this.user);
	this.users = null;
	this.userService.handleLogin(user);
    }
    
}
