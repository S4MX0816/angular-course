import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() counterEmitter = new EventEmitter<number>();

  counter = 0;
  interval: NodeJS.Timer;

  startGame() {
    this.interval = setInterval(() => {
      this.counter++;
      this.counterEmitter.emit(this.counter);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
