import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = this.subscriptions[1];
  res = {
    email: '',
    password: '',
    subscription: '',
  };
  formSubmitted = false;

  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    this.res.email = form.value.mail;
    this.res.password = form.value.password;
    this.res.subscription = form.value.subscription;
    form.reset();
  }
}
