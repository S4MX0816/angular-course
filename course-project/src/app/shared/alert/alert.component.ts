import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="backdrop"></div>
    <div class="alert-box">
      <p>{{ message }}</p>
      <div class="alert-box-actions">
        <button class="btn btn-primary">Close</button>
      </div>
    </div>
  `,
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() message: string;
}
