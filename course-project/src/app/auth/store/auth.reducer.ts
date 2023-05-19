import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
}

const initialState: State = {
  user: null,
};

export function AuthReducer(
  state = initialState,
  action: AuthActions.AuthActions
): State {
  switch (action.type) {
    case AuthActions.LOGIN: {
      const user = new User(
        action.payload.usedId,
        action.payload.email,
        action.payload.token,
        action.payload.expirationDate
      );

      return {
        ...state,
        user,
      };
    }
    case AuthActions.LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
}
