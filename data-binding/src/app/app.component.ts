import { Component } from '@angular/core';
import { ServerElement } from './server-element/server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: ServerElement[] = [
    new ServerElement('server', 'TestServer', 'Just a test server'),
  ];
}
