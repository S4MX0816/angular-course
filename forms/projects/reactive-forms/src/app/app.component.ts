import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit(): void {
    this.signUpForm = new FormGroup<SignUpForm>({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
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
}
