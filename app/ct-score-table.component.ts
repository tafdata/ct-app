import { Component, Input } from '@angular/core';

import { User }             from './user';

@Component({
    moduleId: module.id,
    selector: 'ct-score-table',
    templateUrl: 'ct-score-table.component.html',
})

export class CtScoreTableComponent{
    @Input()
    users: User[]; 
}
