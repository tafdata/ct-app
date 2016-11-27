import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms'; 
import { HttpModule, JsonpModule }    from '@angular/http';
import { NgModule }      from '@angular/core';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }          from './app.component';
import { AppRoutingModule }      from './app-routing.module.ts';
import './rxjs-extentions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../data/in-memory-data.service';
import { nvD3 }                 from 'ng2-nvd3';


import { CtScoreTableComponent } from './ct-score-table/ct-score-table.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { MyPageComponent }       from './my-page/my-page.component';

import { UserService }           from './user.service';
import { UserSearchComponent }   from './user-search/user-search.component';
import { ItemService }           from './item.service';
import { RecordService }         from './record.service';
import { DataService }           from './data.service';
import { TeamService }           from './team.service';

import { LoginComponent } from './login/login.component';
import { CtScoreChartComponent } from './ct-score-chart/ct-score-chart.component';
import { MyCtScoreTableComponent } from './my-ct-score-table/my-ct-score-table.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MySummaryComponent } from './my-summary/my-summary.component';
import { MyCtTargetComponent } from './my-ct-target/my-ct-target.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MultiBarHorizontalChartComponent } from './multi-bar-horizontal-chart/multi-bar-horizontal-chart.component';
import { CtMetaTableComponent } from './ct-meta-table/ct-meta-table.component';
import { MultiBarChartComponent } from './multi-bar-chart/multi-bar-chart.component';




@NgModule({
    declarations: [
	AppComponent,
	CtScoreTableComponent,
	OverviewPageComponent,
	MyPageComponent,
	UserSearchComponent,
	LoginComponent,
	CtScoreChartComponent,
	nvD3,
	MyCtScoreTableComponent,
	NotFoundComponent,
	MySummaryComponent,
	MyCtTargetComponent,
	TeamPageComponent,
	PieChartComponent,
	MultiBarHorizontalChartComponent,
	CtMetaTableComponent,
	MultiBarChartComponent,
    ],
    imports: [
	AppRoutingModule,
	BrowserModule,
	FormsModule,
	HttpModule,
	JsonpModule,
	InMemoryWebApiModule.forRoot(InMemoryDataService),
	NgbModule.forRoot(),
    ],
    providers: [
	UserService,
	ItemService,
	RecordService,
	DataService,
	TeamService,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
