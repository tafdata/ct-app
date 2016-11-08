import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule }    from '@angular/forms'; 
import { HttpModule }    from '@angular/http';
import { NgModule }      from '@angular/core';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }          from './app.component';
import { CtScoreTableComponent } from './ct-score-table/ct-score-table.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { MyPageComponent }       from './my-page/my-page.component';

import { UserService }           from './user.service';

import { AppRoutingModule }      from './app-routing.module.ts';


@NgModule({
    declarations: [
	AppComponent,
	CtScoreTableComponent,
	OverviewPageComponent,
	MyPageComponent
    ],
    imports: [
	AppRoutingModule,
	BrowserModule,
	HttpModule,
	NgbModule.forRoot(),
    ],
    providers: [
	UserService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
