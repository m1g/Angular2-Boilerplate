"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.message = 'hello!';
        this.users = [
            { id: 25, name: 'Michael', username: 'notmyluver' },
            { id: 26, name: 'Tito', username: 'theotherjackson' },
            { id: 27, name: 'Janet', username: 'missjacksonif' }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <header>\n      <nav class=\"nav navbar navbar-inverse\">\n        <div class=\"navbar-header\">\n          <a href=\"/\" class=\"navbar-brand\">Boilerplate</a>\n        </div>\n      </nav>\n    </header>\n\n    <main>\n      <div class=\"row\">\n\n        <div class=\"col-sm-4\">\n          <div *ngIf=\"users\">\n            <ul class=\"list-group users-list\">\n              <li\n                *ngFor=\"let user of users\" class=\"list-group-item\">\n                {{ user.name }} ({{ user.username }})\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-sm-8\">\n          <div class=\"jumbotron\">\n            <h1>Welcome to the Boilerplate!</h1>\n            <p>{{ message }}</p>\n          </div>\n        </div>\n\n\n      </div>\n    </main>\n\n    <footer class=\"text-center\">\n      Copyright &copy; 2017\n    </footer>\n  ",
            styles: ["\n    .jumbotron {box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);}\n  "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map