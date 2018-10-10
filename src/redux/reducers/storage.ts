import { CLEAR_USER, SET_USER } from '../actions/actionTypes';

const initialState = {
  user: undefined,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        user: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
