import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQX8BEUouAmRPCRnrM_-tFsEn3Fiu67Yc',
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorResp: HttpErrorResponse) => {
          let errorMessage = 'An unknown error occurred!';
          if (!errorResp.error || !errorResp.error.error) {
            return throwError(errorMessage);
          }
          switch (errorResp.error.error.message) {
            case 'EMAIL_EXISTS': {
              errorMessage = 'This email exists already';
            }
          }
          return throwError(errorMessage);
        })
      );
  }
}
