import { Component } from '@angular/core';

import { User }      from './user';


const USERS: User[]= [
    { id: 'OSK13001', name: '13A', marks: 85 },
    { id: 'OSK13002', name: '13B', marks: 75 },
    { id: 'OSK13003', name: '13C', marks: 65 },
    { id: 'OSK14001', name: '14A', marks: 55 },
    { id: 'OSK14002', name: '14B', marks: 45 },
    { id: 'OSK14003', name: '14C', marks: 35 },
    { id: 'OSK15005', name: '15A', marks: 25 },
    { id: 'OSK15006', name: '15B', marks: 15 },
];



@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ],
})


export class AppComponent {
    
    title = 'Coach-X';
    users = USERS;		// ユーザーデータの読み込み

}
