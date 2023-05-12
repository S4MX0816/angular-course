import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

type hobby = FormControl<string>;
interface SignUpForm {
  userData: FormGroup<{
    username: FormControl<string>;
    email: FormControl<string>;
  }>;
  gender: FormControl<string>;
  hobbies: FormArray<hobby>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup<SignUpForm>;
  forbiddenUsernames = ['chris', 'anna'];

  ngOnInit(): void {
    this.signUpForm = new FormGroup<SignUpForm>({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          [this.forbiddenEmails]
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  onSubmit(): void {
    console.log(this.signUpForm);
  }

  onAddHobby(): void {
    const control: hobby = new FormControl(null, Validators.required);
    this.signUpForm.controls.hobbies.push(control);
  }

  forbiddenNames(control: FormControl): { [k: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }

    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        }

        resolve(null);
      }, 1500);
    });

    return promise;
  }
}
