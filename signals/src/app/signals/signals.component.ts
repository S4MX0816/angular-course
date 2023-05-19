import { NgFor } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);

  increment() {
    // this.counter.update((oldCounter) => ++oldCounter);
    this.counter.set(this.counter() + 1);
    // this.actions.push('INCREMENT');
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
  }

  decrement() {
    this.counter.update((oldCounter) => --oldCounter);
    // this.actions.push('DECREMENT');
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
