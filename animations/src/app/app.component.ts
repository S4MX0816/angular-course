import { Component } from '@angular/core';
import { style } from '@angular/animations';
import { animate, state, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0)',
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px)',
        })
      ),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(800)),
    ]),

    trigger('wildState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0) scale(1)',
          borderRadius: 0,
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px) scale(1)',
          borderRadius: 0,
        })
      ),
      state(
        'shrunken',
        style({
          backgroundColor: 'green',
          transform: 'translateX(0) scale(0.5)',
          borderRadius: 0,
        })
      ),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orangered',
        }),
        animate(
          1000,
          style({
            borderRadius: '50px',
          })
        ),
        animate(500),
      ]),
    ]),

    trigger('list1', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(300),
      ]),
      transition(
        '* => void',
        animate(
          300,
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          })
        )
      ),
    ]),
  ],
})
export class AppComponent {
  state: 'normal' | 'highlighted' = 'normal';
  wildState: 'normal' | 'highlighted' | 'shrunken' = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState === 'normal' ? 'highlighted' : 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
