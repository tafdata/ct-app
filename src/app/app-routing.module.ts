import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CtScoreTableComponent } from './ct-score-table/ct-score-table.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { MyPageComponent }       from './my-page/my-page.component';
import { LoginComponent }        from './login/login.component';


const routes: Routes = [
    {
	path: '',
	redirectTo: '/login',
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
	component: MyPageComponent,
    },
    {
	path: 'mypage/:id',
	component: MyPageComponent,
    },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
