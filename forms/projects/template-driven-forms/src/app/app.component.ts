import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQsn = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    mail: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submittedForm = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: { username: suggestedName, email: '' },
    //   secret: 'pet',
    //   questionAns: '',
    //   gender: 'male',
    // });
    this.signUpForm.form.patchValue({ userData: { username: suggestedName } });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submittedForm = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.mail = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAns;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
