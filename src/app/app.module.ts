import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule }    from '@angular/forms'; 
import { HttpModule }    from '@angular/http';
import { NgModule }      from '@angular/core';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }          from './app.component';
import { CtScoreTableComponent } from './ct-score-table/ct-score-table.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { MyPageComponent }       from './my-page/my-page.component';

import { AppRoutingModule }      from './app-routing.module.ts';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';



import { UserService }           from './user.service';




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
	InMemoryWebApiModule.forRoot(InMemoryDataService),
	NgbModule.forRoot(),
    ],
    providers: [
	UserService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
