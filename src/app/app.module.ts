import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule }    from '@angular/forms'; 
import { HttpModule }    from '@angular/http';
import { NgModule }      from '@angular/core';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CtScoreTableComponent } from './ct-score-table/ct-score-table.component';


@NgModule({
    declarations: [
	AppComponent,
	CtScoreTableComponent
    ],
    imports: [
	BrowserModule,
	HttpModule,
	NgbModule.forRoot(),
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
