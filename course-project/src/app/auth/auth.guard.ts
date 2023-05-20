import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  router: RouterStateSnapshot
):
  | boolean
  | UrlTree
  | Promise<boolean | UrlTree>
  | Observable<boolean | UrlTree> => {
  const routerService = inject(Router);
  const store: Store<fromApp.AppState> = inject(Store);
  return store.select('auth').pipe(
    take(1),
    map((authState) => authState.user),
    map((user) => {
      const isAuth = !!user;
      if (isAuth) {
        return true;
      }
      return routerService.createUrlTree(['/auth']);
    })

    // old way
    // tap((isAuth) => {
    //   if (!isAuth) {
    //     routerService.navigate(['/auth']);
    //   }
    // })
  );
};
