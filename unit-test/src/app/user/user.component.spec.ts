import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user from the service', () => {
    const userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display the username if the user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const compiled: HTMLDivElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      component.user.name
    );
  });

  it("shouldn't display the username if the user is not logged in", () => {
    const compiled: HTMLDivElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(
      component.user.name
    );
  });

  it("should't fetch data successfully if not called asynchronously", () => {
    const dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', waitForAsync(() => {
    const fixtureV2 = TestBed.createComponent(UserComponent);
    const componentV2 = fixtureV2.componentInstance;
    const dataService = fixtureV2.debugElement.injector.get(DataService);
    spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data Mocked')
    );
    fixtureV2.detectChanges();
    fixture.whenStable().then(() => {
      expect(componentV2.data).toBe('Data Mocked');
    });
  }));

  it('should fetch data successfully if called fake asynchronously', fakeAsync(() => {
    const fixtureV2 = TestBed.createComponent(UserComponent);
    const componentV2 = fixtureV2.componentInstance;
    const dataService = fixtureV2.debugElement.injector.get(DataService);
    spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixtureV2.detectChanges();
    tick();
    expect(componentV2.data).toBe('Data');
  }));
});
