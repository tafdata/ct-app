import { Component, OnInit, Input } from '@angular/core';

import { User }                     from '../user';


@Component({
//    moduleId: module.id,
    selector: 'app-ct-score-table',
    templateUrl: './ct-score-table.component.html',
    styleUrls: ['./ct-score-table.component.css']
})
export class CtScoreTableComponent{
    @Input()
    users: User[];
    
}
