import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

interface ProjectForm {
  name: FormControl<string>;
  email: FormControl<string>;
  status: FormControl<string>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup<ProjectForm>;
  res = {
    name: '',
    email: '',
    status: '',
  };
  formSubmitted = false;

  ngOnInit(): void {
    this.projectForm = new FormGroup<ProjectForm>({
      name: new FormControl(
        null,
        [Validators.required, this.forbiddenProjectName],
        this.forbiddenProjectNameAsync
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(this.projectStatuses[1]),
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    this.res.name = this.projectForm.value.name;
    this.res.email = this.projectForm.value.email;
    this.res.status = this.projectForm.value.status;
    this.projectForm.reset({
      status: this.projectStatuses[1],
    });
  }

  forbiddenProjectName(control: FormControl): { [k in string]: boolean } {
    if (control.value === 'test') {
      return { forbiddenName: true };
    }

    return null;
  }

  forbiddenProjectNameAsync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'test2') {
          resolve({ forbiddenName: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
