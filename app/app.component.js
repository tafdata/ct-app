"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var USERS = [
    { id: 'OSK13001', name: '13A', marks: 85 },
    { id: 'OSK13002', name: '13B', marks: 75 },
    { id: 'OSK13003', name: '13C', marks: 65 },
    { id: 'OSK14001', name: '14A', marks: 55 },
    { id: 'OSK14002', name: '14B', marks: 45 },
    { id: 'OSK14003', name: '14C', marks: 35 },
    { id: 'OSK15005', name: '15A', marks: 25 },
    { id: 'OSK15006', name: '15B', marks: 15 },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Coach-X';
        this.users = USERS; // ユーザーデータの読み込み
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map