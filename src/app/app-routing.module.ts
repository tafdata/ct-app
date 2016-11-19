import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CtScoreTableComponent } from './ct-score-table/ct-score-table.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { MyPageComponent }       from './my-page/my-page.component';
import { LoginComponent }        from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
	path: '',
	redirectTo: 'mypage/OSK14326',
	pathMatch: 'full',
    },
    {
	path: 'login',
	component: LoginComponent,
    },
    {
	path: 'overview',
	component: OverviewPageComponent,
    },
    {
	path: 'mypage',
	redirectTo: '404',
    },
    {
	path: 'mypage/:id',
	component: MyPageComponent,
    },
    {
	path: '404',
	component: NotFoundComponent,
    },
    {
	path: '**',
	redirectTo: '404',
    },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
