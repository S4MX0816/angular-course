import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onCounterUpdate(counterVal: number) {
    if (counterVal % 2 === 0) {
      this.evenNumbers.push(counterVal);
    } else {
      this.oddNumbers.push(counterVal);
    }
  }
}
