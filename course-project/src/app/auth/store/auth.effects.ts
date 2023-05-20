import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import * as AuthActions from './auth.actions';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  authLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {
          return this.http
            .post<AuthResponseData>(
              `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`,
              {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true,
              }
            )
            .pipe(
              map((resData) => {
                const expirationDate = new Date(
                  new Date().getTime() + +resData.expiresIn * 1000
                );
                return of(
                  new AuthActions.Login({
                    email: resData.email,
                    userId: resData.localId,
                    token: resData.idToken,
                    expirationDate,
                  })
                );
              }),
              catchError((error) => {
                return of();
              })
            );
        })
      ) as any
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
