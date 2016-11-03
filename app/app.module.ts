import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';


import { AppComponent }            from './app.component';
import { CtScoreTableComponent }   from './ct-score-table.component';


@NgModule({
    imports: [
	BrowserModule,
	NgbModule.forRoot(),
    ],
    declarations: [
	AppComponent,
	CtScoreTableComponent,
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
