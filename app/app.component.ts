import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <nav class="nav navbar navbar-inverse">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">Boilerplate</a>
        </div>
      </nav>
    </header>

    <main>
      <div class="row">

        <div class="col-sm-4">
          <div *ngIf="users">
            <ul class="list-group users-list">
              <li
                *ngFor="let user of users" class="list-group-item">
                {{ user.name }} ({{ user.username }})
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-8">
          <div class="jumbotron">
            <h1>Welcome to the Boilerplate!</h1>
            <p>{{ message }}</p>
          </div>
        </div>


      </div>
    </main>

    <footer class="text-center">
      Copyright &copy; 2017
    </footer>
  `,
  styles [`
    .jumbotron {box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);}
  `]
})

export class AppComponent {
  message = 'hello!';
  users = [
    { id: 25, name: 'Michael', username: 'notmyluver' },
    { id: 26, name: 'Tito', username: 'theotherjackson' },
    { id: 27, name: 'Janet', username: 'missjacksonif' }
  ];
}
