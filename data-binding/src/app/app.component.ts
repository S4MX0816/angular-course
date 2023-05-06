import { Component } from '@angular/core';
import {
  EventData,
  ServerElement,
} from './server-element/server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: ServerElement[] = [];

  onServerAdded(serverData: EventData) {
    this.serverElements.push(
      new ServerElement(
        'server',
        serverData.serverName,
        serverData.serverContent
      )
    );
  }

  onBlueprintAdded(blueprintData: EventData) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
