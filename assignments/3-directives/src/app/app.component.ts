import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      .white-log {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  showPassword = false;
  // btnClicks: number[] = [];
  btnClicks: Date[] = [];

  onDisplayDetails() {
    this.showPassword = !this.showPassword;
    // this.btnClicks.push(this.btnClicks.length + 1);
    this.btnClicks.push(new Date());
  }
}
