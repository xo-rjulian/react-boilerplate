import { AUTH_FAILED, AUTH_LOGOUT, AUTH_SUCCESS } from '../actions/actionTypes';

const initialState = {
  error: undefined,
  isAuthenticated: false,
  user: undefined,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case AUTH_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
